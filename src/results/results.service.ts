import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResultsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getMbtiFromAi() {
    const url = process.env.FASTAPI_URL;

    try {
      const response = await axios.get(url);
      const mbti = response.data;

      const result = await this.prismaService.mbti.findUnique({
        where: {
          type: mbti,
        },
      });

      return {
        statusCode: HttpStatus.OK,
        data: {
          message: ['결과를 정상적으로 조회했습니다.'],
          result,
        },
      };
    } catch (e) {
      throw new InternalServerErrorException([
        'MBTI 결과를 가져오는 데 실패했습니다.',
      ]);
    }
  }
}
