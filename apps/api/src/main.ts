/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

/**
 * Bootstraps the NestJS application.
 *
 * This asynchronous function creates the application instance using the main module, configures a global API prefix, and enables CORS. It then starts the server on the port defined by the PORT environment variable or defaults to 3000, logging the URL where the application is accessible.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.enableCors();
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
