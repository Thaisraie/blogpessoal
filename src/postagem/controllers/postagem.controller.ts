import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt.auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

// Classe responsável por fornecer os endpoints, (endereço de acesso a API). Classe que verifica a disponibilidade do endpoints se está ou não acessivel ou resposta da requisição errada.
@ApiTags('Postagem')
@UseGuards(JwtAuthGuard)
@Controller("/postagens")
@ApiBearerAuth()
export class PostagemController{

    constructor(private readonly postagemService: PostagemService) {} // Criando objeto da classe service Readonly somente leitura, sera utilizado apenas e não alterado nada.

    @Get() // Método de consulta, responde uma requisição HTTP.
    @HttpCode(HttpStatus.OK) // Decorador HTTP Status que retorna o 200 que está ok.
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }

    @Get('/:id') // Quando utilizado ":" é uma variável de caminho. 
    @HttpCode(HttpStatus.OK) // Inserir o decorador  @param (parâmetro) e converter para número inteiro (ParseIntPipe).
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{
        return this.postagemService.findById(id);
    }

    @Get('/titulo/:titulo') 
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.postagemService.findByTitulo(titulo);
    } 

    @Post() // Post envia algo para o banco 
    @HttpCode(HttpStatus.CREATED) // Http create pois está criando devolve o status 201
    // Método recebe o parâmetro do corpo e não do caminho por isso utiliza o @body.
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem);
    }

    @Put() // Atualiza uma postagem.
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem);
    }
    
    @Delete('/:id') 
    @HttpCode(HttpStatus.NO_CONTENT) // Conteúdo não existe, Status 204 
    delete(@Param('id', ParseIntPipe) id: number){
        return this.postagemService.delete(id);
    } 
}