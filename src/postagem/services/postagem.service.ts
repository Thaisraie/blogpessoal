import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "../entities/postagem.entity";
import { ILike, Repository } from "typeorm";

// Classe de serviço. Classe composta por regras da aplicação tais como; cadastrar, atualizar e deletar.
@Injectable() // Decorador indica que a classe é provider pode ser injetada em outra classe. 
export class PostagemService{
    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>

    ){}

    async findAll(): Promise<Postagem[]>{
        return await this.postagemRepository.find(); 
         // Await espera a resposta da promisse e não trava o sistema
        // Método find criando uma promessa "um array" com  obejtos postagens. Busca todas as postagens do banco de dados

        // SELECT * FROM tb_postagem;
    
    }

    async findById(id: number): Promise<Postagem> {

        // Variável que executa o método findOne para localizar o id. 
        let postagem = await this.postagemRepository.findOne({
            where:{
                id
            }
        });
        
        // Checar se a postagem não foi encontrada.
        if (!postagem)
            throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

        // Retornar a postagem, caso ela exista.
        return postagem;

        // SELECT * FROM tb_postagem where id = ?;
    }

    async findByTitulo(titulo: string): Promise<Postagem[]>{
        return await this.postagemRepository.find({
            where:{
                titulo: ILike(`%${titulo}%`) // "ILike" case sensitive traz a busca por texto tanto maiúsculo quanto minúsculo. 
            }
        })
        // SELECT * FROM tb_postagem where título LIKE '%titulo%';
    }
}