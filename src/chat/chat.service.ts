import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
} from '@nestjs/common';
import axios from 'axios';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class ChatService {
  async getQuestion(userId: string) {
    const url = process.env.FASTAPI_URL;

    try {
      const response = await axios.get(url, {
        params: userId,
      });
      const question = response.data;

      return {
        statusCode: HttpStatus.OK,
        data: {
          message: ['질문을 정상적으로 가져왔습니다.'],
          userId: userId,
          question,
        },
      };
    } catch (e) {
      throw new InternalServerErrorException([
        '질문을 가져오는 데 실패했습니다.',
      ]);
    }
  }

  async createAnswer(
    userId: string,
    questionId: string,
    createAnswerDto: CreateAnswerDto,
  ) {
    const url = process.env.FASTAPI_URL;

    try {
      await axios.get(url, {
        params: { userId: userId },
        data: {
          questionId: questionId,
          answer: createAnswerDto.answer,
        },
      });
    } catch (e) {
      throw new NotAcceptableException([
        '사용자의 답변이 전달되지 않았습니다.',
      ]);
    }

    const answer = {
      userId: userId,
      questionId: questionId,
      userAns: createAnswerDto.answer,
    };

    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: ['답변이 정상적으로 생성되었습니다.'],
        answer,
      },
    };
  }
}
