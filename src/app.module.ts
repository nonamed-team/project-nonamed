import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import envFilePath from 'envs/env';
import * as Joi from 'joi';
import { EmojiQuizModule } from './emoji-quiz/emoji-quiz.module';
import { EmojiQuiz } from './emoji-quiz/entities/emoji-quiz.entity';

const envValidationSchema = Joi.object({
  PORT: Joi.number().required(),
  NODE_ENV: Joi.string().valid('dev', 'staging', 'prod', 'test'),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.string().required(),
  DB_USERNAME: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  // JWT_SECRET: Joi.string().required(),
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      validationSchema: envValidationSchema,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      schema: process.env.DB_SCHEMA_NAME,
      synchronize: true,
      logging: process.env.DB_LOGGING === 'true' ? true : false,
      autoLoadEntities: true,
      // entities: [EmojiQuiz],
      // logger: new CustomDbLogger(),
      ssl: process.env.DB_SSL === 'true' ? true : false,
    }),
    EmojiQuizModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
