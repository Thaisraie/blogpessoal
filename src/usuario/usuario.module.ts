// Registrar classes usuario que irá gerar a tb_usuario.

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.Entity';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { Bcrypt } from '../auth/bcrypt/bcrypt';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], 
  providers: [UsuarioService, Bcrypt],
  controllers: [UsuarioController],
  exports: [TypeOrmModule, UsuarioService], // Registrar para fazer a autenticação.
})
export class UsuarioModule {}