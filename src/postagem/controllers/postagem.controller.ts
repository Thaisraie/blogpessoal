import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";

// Classe responsável por fornecer os endpoints, (endereço de acesso a API). Classe que verifica a disponibilidade do endpoints se está ou não acessivel ou resposta da requisição errada.
@Controller("/postagens")
export class PostagemController{

    constructor(private readonly postagemService: PostagemService) {} // Criando objeto da classe service Readonly somente leitura, sera utilizado apenas e não alterado nada.

    @Get() // Método de consulta, responde uma requisição HTTP.
    @HttpCode(HttpStatus.OK) // Decorador HTTP Status que retorna o 200 que está ok.
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }

    @Get('/:id') // Quando utilizado : é uma variável de caminho. 
    @HttpCode(HttpStatus.OK) // Inserir o decorador  @param (parâmetro) e converter para número inteiro "ParseIntPipe".
    findById(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{
        return this.postagemService.findById(id);
    }

    @Get('/titulo/:titulo') 
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.postagemService.findByTitulo(titulo);
    } 
}