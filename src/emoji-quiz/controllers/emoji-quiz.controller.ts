import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';
import { EmojiQuizService } from '../services/emoji-quiz-service';
import { AnswerEmojiQuizDto } from '../dtos/answer-emoji-quiz.dto';
import { EmojiQuizType } from '../emoji-quiz.constants';

@Controller('emoji-quizs')
@ApiTags('이모티콘 퀴즈')
export class EmojiQuizController {
  constructor(private emojiQuizService: EmojiQuizService) {}

  @ApiDoc({
    summary: '이모티콘 문제내기',
    description: '현재 이모티콘 문제 중 랜덤으로 한 문제를 조회합니다.',
  })
  @Post('')
  async getEmojiQuizRandomly(@Query('quizType') quizType: EmojiQuizType) {
    return await this.emojiQuizService.getEmojiQuizRandomly(quizType);
  }

  @ApiDoc({
    summary: '정답 제출',
  })
  @Post(':id')
  async answerEmojiQuiz(
    @Param('id') id: number,
    @Body() answerEmojiQuizDto: AnswerEmojiQuizDto,
  ) {
    return await this.emojiQuizService.answerEmojiQuiz(id, answerEmojiQuizDto);
  }
}
