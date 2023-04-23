import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEmojiQuizController } from './controllers/admin-emoji-quiz.controller';
import { EmojiQuiz } from './entities/emoji-quiz.entity';
import { EmojiQuizRepository } from './repositories/emoji-quiz.repository';
import { EmojiQuizService } from './services/emoji-quiz-service';
import { EmojiQuizController } from './controllers/emoji-quiz.controller';
import { AdminEmojiQuizService } from './services/admin-emoji-quiz-service';

@Module({
  imports: [TypeOrmModule.forFeature([EmojiQuiz])],
  controllers: [AdminEmojiQuizController, EmojiQuizController],
  providers: [EmojiQuizService, AdminEmojiQuizService, EmojiQuizRepository],
})
export class EmojiQuizModule {}
