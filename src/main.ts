import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'; // Variável de ambiente - TZ (Time zone) fuso horário do brasil. Quando subir a aplicação na nuvem precisa configurar o servidor correto. 

  app.useGlobalPipes(new ValidationPipe()); // Registrar a biblioteca de validação de dados para utilizar nas classes modeladoras.

  app.enableCors(); // Propriedade Cors (Origem cruzada) para o Front-end funcionar.

  await app.listen(4000); // Porta 4000 se comunica com o Nest.
}
bootstrap();
