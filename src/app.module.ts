import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { Tema } from './tema/entities/tema.entity';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';
import { ProdService } from './data/services/prod.service';
import { ConfigModule } from '@nestjs/config';
import { DevService } from './data/services/dev.service';

// Criando módulo de postagem para ter acesso a controladora. Na classe Main é utilizada essa classe para construir o projeto, precisa registrar todos os módulos para funcionar.
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useClass: ProdService, // DevService para rodar local.
      imports: [ConfigModule],
    }),
    PostagemModule, 
    TemaModule, 
    AuthModule, 
    UsuarioModule // Registro das classes para o nest reconhecer.
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

