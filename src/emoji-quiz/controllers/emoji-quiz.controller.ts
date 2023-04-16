import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';
import { EmojiQuizService } from '../services/emoji-quiz-service';

@Controller('emoji-quizs')
@ApiTags('이모티콘 퀴즈')
export class EmojiQuizController {
  constructor(private emojiQuizService: EmojiQuizService) {}

  @ApiDoc({
    summary: '이모티콘 퀴즈 목록을 조회합니다.',
  })
  @Get('')
  async findEmojiQuizs() {
    return await this.emojiQuizService.findEmojiQuizs();
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 조회합니다.',
  })
  @Get(':id')
  async findEmojiQuiz() {
    console.log('test');
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 추가합니다.',
  })
  @Post('')
  async insertEmojiQuiz() {
    console.log('test');
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 수정합니다.',
  })
  @Put('')
  async updateEmojiQuiz() {
    console.log('test');
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 삭제합니다.',
  })
  @Put('')
  async deleteEmojiQuiz() {
    console.log('test');
  }
}
