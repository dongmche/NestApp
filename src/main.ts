import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './exceptions/globalException';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.useGlobalPipes(new ValidationPipe()); // enabling validation on request body;

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Event Management API')
    .setDescription('API documentation for the Event Management System')
    .setVersion('1.0')
    .addTag('events') // Tag for grouping endpoints
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        in: 'header',
      },
      'access-token', // key name, used in @ApiBearerAuth
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document); // Swagger UI will be available at /swagger

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
