import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmojiQuizController } from './controllers/emoji-quiz.controller';
import { EmojiQuiz } from './entities/emoji-quiz.entity';
import { EmojiQuizRepository } from './repositories/emoji-quiz.repository';
import { EmojiQuizService } from './services/emoji-quiz-service';

@Module({
  imports: [TypeOrmModule.forFeature([EmojiQuiz])],
  controllers: [EmojiQuizController],
  providers: [EmojiQuizService, EmojiQuizRepository],
})
export class EmojiQuizModule {}
