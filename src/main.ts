import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Raie')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Thais Siqueira","https://github.com/Thaisraie","thaisqusi@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'; // Variável de ambiente - TZ (Time zone) fuso horário do brasil. Quando subir a aplicação na nuvem precisa configurar o servidor correto. 

  app.useGlobalPipes(new ValidationPipe()); // Registrar a biblioteca de validação de dados para utilizar nas classes modeladoras.

  app.enableCors(); // Propriedade Cors (Origem cruzada) para o Front-end funcionar.

  await app.listen(process.env.PORT || 4000); // Porta 4000 se comunica com o Nest.
}
bootstrap();
