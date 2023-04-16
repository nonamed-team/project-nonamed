import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmojiQuiz } from '../entities/emoji-quiz.entity';

@Injectable()
export class EmojiQuizRepository {
  constructor(
    @InjectRepository(EmojiQuiz)
    private repository: Repository<EmojiQuiz>,
  ) {}

  async findEmojiQuizs() {
    return await this.repository.find();
  }
}
