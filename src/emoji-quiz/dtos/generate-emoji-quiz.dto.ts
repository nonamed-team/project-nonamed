import { PickType } from '@nestjs/swagger';
import { EmojiQuizDto } from './emoji-quiz.dto';

export class GenerateEmojiQuizDto extends PickType(EmojiQuizDto, [
  'emojis',
  'quizType',
  'answer',
  'genre',
  'hint',
  'hintDetail',
]) {}
