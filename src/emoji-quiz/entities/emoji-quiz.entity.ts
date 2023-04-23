import { ApiProperty } from '@nestjs/swagger';
import {
  IsCustomEnum,
  IsCustomString,
} from 'src/common/decorators/dto/dto.decorator';
import { CoreHardEntity } from 'src/common/entities/core-hard.entity';
import { CoreSoftEntity } from 'src/common/entities/core-soft.entity';
import { Column, Entity } from 'typeorm';
import { EmojiQuizType } from '../emoji-quiz.constants';

@Entity({ name: 'EmojiQuiz', schema: process.env.DB_SCHEMA_NAME })
export class EmojiQuiz extends CoreSoftEntity {
  @ApiProperty({
    required: true,
    example: '🤔😚😂😋',
    description: '이모티콘 문제',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  emojis: string;

  @ApiProperty({
    required: true,
    example: EmojiQuizType.MOVIE,
    description: '퀴즈 타입',
    type: EmojiQuizType,
  })
  @IsCustomEnum({ type: EmojiQuizType, required: true })
  @Column({ type: 'enum', enum: EmojiQuizType, nullable: false })
  quizType: EmojiQuizType;

  @ApiProperty({
    required: true,
    example: '인사이드아웃',
    description: '이모티콘 문제 정답',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  answer: string;

  @ApiProperty({
    required: true,
    example: '장르',
    description: 'SF',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  genre: string;

  @ApiProperty({
    required: true,
    example: '반군세력에게 납치된 아이언맨의 탈출 똥꼬쇼',
    description: '대략적인 힌트',
  })
  @IsCustomString({
    required: true,
    minLength: 1,
    maxLength: 100,
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  hint: string;

  @ApiProperty({
    required: true,
    example:
      '🤔: 어떻게 탈출할지 고민하는 설명, 😡: 화가 나버림 😓: 실수해뿌따...',
    description: '각각 이모티콘에 대한 설명',
  })
  @IsCustomString({
    required: false,
    minLength: 0,
    maxLength: 1000,
  })
  @Column({ type: 'varchar', length: 1000, nullable: true })
  hintDetail: string;
}
