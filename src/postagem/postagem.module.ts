import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controllers/postagem.controller";
import { TemaModule } from "../tema/tema.module";
import { TemaService } from "../tema/services/tema.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule], // ForFeature indica quem é a classe Model. Criando estrutura da tabela, que é a classe Model.
    providers: [PostagemService, TemaService],
    controllers: [PostagemController],
    exports: [TypeOrmModule] // Gerar tabela do banco de dados, disponibilizando para outras classes.
})

export class PostagemModule {}