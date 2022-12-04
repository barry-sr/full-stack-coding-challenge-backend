import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfiguration = new DocumentBuilder()
    .setTitle('Airport API')
    .setDescription(
      'This is API allow user to find airport information by name, iata, city, and country',
    )
    .setVersion('1.0')
    .addTag('Airport')
    .build();

  const swaggerDocumentation = SwaggerModule.createDocument(
    app,
    swaggerConfiguration,
  );
  SwaggerModule.setup('airport', app, swaggerDocumentation);

  app.enableCors();
  app.use(helmet());
  await app.listen(3001);
}
bootstrap();
