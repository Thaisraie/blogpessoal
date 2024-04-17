import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { Repository } from "typeorm";

// Classe de serviço. Classe composta por regras da aplicação.
@Injectable()
export class PostagemService{
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>

    ){}

    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); 
        // Await espera a resposta da promisse e não trava o sistema
        // Método find busca todas as postagens do banco de dados
    }
}