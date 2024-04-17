import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
import { Postagem } from "../entities/postagem.entity";

// Classe responsável por fornecer os endpoints, (endereço de acesso a API). Classe que verifica a disponibilidade do endpoints se está ou não acessivel, resposta da requisição errada.
@Controller("/postagens")
export class PostagemController{

    constructor(private readonly postagemService: PostagemService) {} // Criando objeto da classe service Readonly somente leitura, sera usado apenas e não alterado nada.

    @Get()
    @HttpCode(HttpStatus.OK) // HTTP Status 200
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();

    }
}