import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // the core function NestFactory to create a Nest application instance.
   const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
