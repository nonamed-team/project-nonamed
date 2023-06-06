import { Injectable } from '@nestjs/common';
import { EmojiQuizRepository } from '../repositories/emoji-quiz.repository';
import { AnswerEmojiQuizDto } from '../dtos/answer-emoji-quiz.dto';
import { CustomExceptionBuilder } from 'src/logger/custom-exception';
import constants, { EmojiQuizType } from '../emoji-quiz.constants';
import { EmojiQuizDto } from '../dtos/emoji-quiz.dto';
const ceb = new CustomExceptionBuilder(constants);

@Injectable()
export class EmojiQuizService {
  constructor(private emojiQuizRepository: EmojiQuizRepository) {}

  async getEmojiQuizRandomly(quizType: EmojiQuizType) {
    const emojiQuiz: EmojiQuizDto[] =
      await this.emojiQuizRepository.findEmojiQuizs(quizType);

    let randomIndex;
    const questionList = [];
    const includeIds = [];
    for (let i = 0; i < constants.props.QUIZ_QUESTION_COUNT; i++) {
      randomIndex = Math.floor(Math.random() * emojiQuiz.length);
      if (!includeIds.includes(emojiQuiz[randomIndex].id)) {
        includeIds.push(emojiQuiz[randomIndex].id);
        questionList.push(emojiQuiz[randomIndex].answer);
      }
    }
    emojiQuiz[randomIndex].quizQuestionList = questionList;
    return emojiQuiz[randomIndex];
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
