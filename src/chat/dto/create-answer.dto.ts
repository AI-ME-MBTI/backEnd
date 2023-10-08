import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty({ message: '답변은 필수적으로 입력해야 합니다.' })
  @IsString({ message: '답변은 문자열 형태여야 합니다.' })
  answer: string;
}
