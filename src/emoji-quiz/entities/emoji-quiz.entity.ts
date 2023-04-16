import { ApiProperty } from '@nestjs/swagger';
import { IsCustomString } from 'src/common/decorators/dto/dto.decorator';
import { CoreHardEntity } from 'src/common/entities/core-hard.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'EmojiQuiz', schema: process.env.DB_SCHEMA_NAME })
export class EmojiQuiz extends CoreHardEntity {
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
}
