import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//Classe que herda o conteúdo passando como parâmetro local. 
// Será usada apenas no decoretor para proteção na controller.
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}