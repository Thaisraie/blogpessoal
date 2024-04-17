import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemController } from "./controllers/postagem.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])], // Criando estrutura da tabela, que é a classe Model.
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule] // Gerar tabela do banco de dados, disponibilizando para outras classes.
})

export class PostagemModule {}