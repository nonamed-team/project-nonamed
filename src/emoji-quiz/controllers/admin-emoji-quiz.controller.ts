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
import { ApiTags } from '@nestjs/swagger';
import { ApiDoc } from 'src/common/decorators/swagger/api-doc.decorator';
import { GenerateEmojiQuizDto } from '../dtos/generate-emoji-quiz.dto';
import { ModifyEmojiQuizDto } from '../dtos/modify-emoji-quiz.dto';
import { AdminEmojiQuizService } from '../services/admin-emoji-quiz-service';

@Controller('admin/emoji-quizs')
@ApiTags('ADMIN 이모티콘 퀴즈')
export class AdminEmojiQuizController {
  constructor(private adminemojiQuizService: AdminEmojiQuizService) {}

  @ApiDoc({
    summary: '이모티콘 퀴즈 목록을 조회합니다.',
  })
  @Get('')
  async findEmojiQuizs() {
    return await this.adminemojiQuizService.findEmojiQuizs();
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 조회합니다.',
  })
  @Get(':id')
  async findEmojiQuiz(@Param('id') id: number) {
    return await this.adminemojiQuizService.findEmojiQuizById(id);
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 추가합니다.',
  })
  @Put('')
  async createEmojiQuiz(@Body() generateEmojiQuizDto: GenerateEmojiQuizDto) {
    return await this.adminemojiQuizService.createEmojiQuiz(
      generateEmojiQuizDto,
    );
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 수정합니다.',
  })
  @Post(':id')
  async modifyEmojiQuiz(
    @Param('id') id: number,
    @Body() modifyEmojiQuizDto: ModifyEmojiQuizDto,
  ) {
    return await this.adminemojiQuizService.modifyEmojiQuizById(
      id,
      modifyEmojiQuizDto,
    );
  }

  @ApiDoc({
    summary: '이모티콘 퀴즈를 삭제합니다.',
  })
  @Delete(':id')
  async deleteEmojiQuiz(@Param('id') id: number) {
    return await this.adminemojiQuizService.deleteEmojiQuizById(id);
  }
}
