import { Module } from '@nestjs/common';
import { Bcrypt } from './bcrypt/bcrypt';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { Passport } from 'passport';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategy/local.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions:{
        expiresIn: '1h'
      }
    })
  ],
  providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy], // Classe registrada pois sera usada em outras classes.
  controllers: [AuthController],
  exports: [Bcrypt], // Classe será utilizada em outros recurso ex: usuario.
})
export class AuthModule { }