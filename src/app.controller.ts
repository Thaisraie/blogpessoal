import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {} // Classe App Service está inserida no construtor como um objeto ela é uma classe de serviço pois utiliza o decorador injectable.

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
