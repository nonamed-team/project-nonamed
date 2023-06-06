import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmojiQuiz } from '../entities/emoji-quiz.entity';
import { ModifyEmojiQuizDto } from '../dtos/modify-emoji-quiz.dto';
import { GenerateEmojiQuizDto } from '../dtos/generate-emoji-quiz.dto';
import { AnswerEmojiQuizDto } from '../dtos/answer-emoji-quiz.dto';
import { EmojiQuizDto } from '../dtos/emoji-quiz.dto';
import { EmojiQuizType } from '../emoji-quiz.constants';

@Injectable()
export class EmojiQuizRepository {
  constructor(
    @InjectRepository(EmojiQuiz)
    private repository: Repository<EmojiQuiz>,
  ) {}

  async findEmojiQuizs(quizType: EmojiQuizType): Promise<EmojiQuizDto[]> {
    return await this.repository.find({
      where: {
        quizType: quizType,
      },
    });
  }

  async findEmojiQuizById(id: number) {
    const emojiQuiz = await this.repository.findOne({
      where: {
        id: id,
      },
    });

    return emojiQuiz;
  }

  async modifyEmojiQuizs(id: number, modifyEmojiQuizDto: ModifyEmojiQuizDto) {
    return await this.repository.update(id, modifyEmojiQuizDto);
  }

  async createEmojiQuiz(generateEmojiQuizDto: GenerateEmojiQuizDto) {
    return await this.repository.save(generateEmojiQuizDto);
  }

  async deleteEmojiQuizById(id: number) {
    return await this.repository.delete({ id });
  }

  async answerEmojiQuiz(id: number, answerEmojiQuizDto: AnswerEmojiQuizDto) {
    return await this.repository.findOne({
      where: {
        id: id,
        answer: answerEmojiQuizDto.answer,
      },
    });
  }
}
