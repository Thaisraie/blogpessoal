import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entities/postagem.entity';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { Tema } from './tema/entities/tema.entity';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

// Criando módulo de postagem para ter acesso a controladora. Na classe Main é utilizada essa classe para construir o projeto, precisa registrar todos os módulos para funcionar.
@Module({
  imports: [
    TypeOrmModule.forRoot({ // Configurar acesso ao banco de dados "For root" usado por toda aplicação.
      type: 'mysql', // Instrução de acesso: Banco de dados utilizado.
      host: 'localhost', // Onde está o banco.
      port: 3306, // Indicando a porta.
      username: 'root', // Nome do usúario do banco de dados.
      password: 'root', // Senha do banco de dados.
      database: 'db_blogpessoal', // Nome do banco de dados.
      entities: [Postagem, Tema, Usuario], // Array com a classe model, "Postagem" é a tabela criada no banco de dados.
      synchronize: true, // Propriedade que sincroniza o sistema com o banco de dados.
      logging: true, // Visualizar a consulta sql no terminal.
    }),
    PostagemModule, TemaModule, AuthModule, UsuarioModule // Registro das classes para o nest reconhecer.
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
