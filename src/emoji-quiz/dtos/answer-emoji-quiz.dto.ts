import { PickType } from '@nestjs/swagger';
import { EmojiQuizDto } from './emoji-quiz.dto';

export class AnswerEmojiQuizDto extends PickType(EmojiQuizDto, ['answer']) {}
