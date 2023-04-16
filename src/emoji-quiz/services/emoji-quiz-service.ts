import { Injectable } from '@nestjs/common';
import { EmojiQuizRepository } from '../repositories/emoji-quiz.repository';

@Injectable()
export class EmojiQuizService {
  constructor(private emojiQuizRepository: EmojiQuizRepository) {}

  async findEmojiQuizs() {
    return await this.emojiQuizRepository.findEmojiQuizs();
  }
}
