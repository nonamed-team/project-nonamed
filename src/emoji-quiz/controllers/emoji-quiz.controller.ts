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
import { ApiBody, ApiTags } from '@nestjs/swagger';
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
  @Get('')
  async getEmojiQuizRandomly(@Query('quizType') quizType: EmojiQuizType) {
    const emoji = await this.emojiQuizService.getEmojiQuizRandomly(quizType);

    return {
      version: '1',
      template: {
        outputs: emoji,
      },
    };
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
