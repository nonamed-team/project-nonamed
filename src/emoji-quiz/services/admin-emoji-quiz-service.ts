import { Injectable } from '@nestjs/common';
import { EmojiQuizRepository } from '../repositories/emoji-quiz.repository';
import { ModifyEmojiQuizDto } from '../dtos/modify-emoji-quiz.dto';
import { GenerateEmojiQuizDto } from '../dtos/generate-emoji-quiz.dto';
import { EmojiQuizType } from '../emoji-quiz.constants';

@Injectable()
export class AdminEmojiQuizService {
  constructor(private emojiQuizRepository: EmojiQuizRepository) {}

  async findEmojiQuizs(quizType: EmojiQuizType) {
    return await this.emojiQuizRepository.findEmojiQuizs(quizType);
  }

  async findEmojiQuizById(id: number) {
    return await this.emojiQuizRepository.findEmojiQuizById(id);
  }

  async modifyEmojiQuizById(
    id: number,
    modifyEmojiQuizDto: ModifyEmojiQuizDto,
  ) {
    return await this.emojiQuizRepository.modifyEmojiQuizs(
      id,
      modifyEmojiQuizDto,
    );
  }

  async createEmojiQuiz(generateEmojiQuizDto: GenerateEmojiQuizDto) {
    return await this.emojiQuizRepository.createEmojiQuiz(generateEmojiQuizDto);
  }

  async deleteEmojiQuizById(id: number) {
    return await this.emojiQuizRepository.deleteEmojiQuizById(id);
  }
}
