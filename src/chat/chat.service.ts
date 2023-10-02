import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class ChatService {
  async getQuestion() {
    const url = process.env.FASTAPI_URL;

    try {
      const response = await axios.get(url);
      const question = response.data;

      return {
        statusCode: HttpStatus.OK,
        data: {
          message: ['질문을 정상적으로 가져왔습니다.'],
          question,
        },
      };
    } catch (e) {
      throw new InternalServerErrorException([
        '질문을 가져오는 데 실패했습니다.',
      ]);
    }
  }

  async createAnswer(createAnswerDto: CreateAnswerDto) {
    const answer = createAnswerDto.answer;

    await this.sendAnswer(answer);

    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: ['답변이 정상적으로 생성되었습니다.'],
        answer,
      },
    };
  }

  async sendAnswer(answer: string) {
    return answer;
  }
}
