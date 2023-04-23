import { Injectable } from '@nestjs/common';
import { EmojiQuizRepository } from '../repositories/emoji-quiz.repository';
import { AnswerEmojiQuizDto } from '../dtos/answer-emoji-quiz.dto';
import { CustomExceptionBuilder } from 'src/logger/custom-exception';
import constants from '../emoji-quiz.constants';
const ceb = new CustomExceptionBuilder(constants);

@Injectable()
export class EmojiQuizService {
  constructor(private emojiQuizRepository: EmojiQuizRepository) {}

  async getEmojiQuizRandomly() {
    const emojiQuizList = await this.emojiQuizRepository.findEmojiQuizs();

    const randomIndex = Math.floor(Math.random() * emojiQuizList.length);

    return emojiQuizList[randomIndex];
  }

  async answerEmojiQuiz(id: number, answerEmojiQuizDto: AnswerEmojiQuizDto) {
    const answer = await this.emojiQuizRepository.answerEmojiQuiz(
      id,
      answerEmojiQuizDto,
    );

    if (!answer) {
      ceb.throwNotFoundException(constants.errorMessages.INCORRECT_ANSWER);
    }

    return answer;
  }
}
