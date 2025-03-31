import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './exceptions/globalException';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.useGlobalPipes(new ValidationPipe()); // enabling validation on request body;

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
