import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResultsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getResult(type: string) {
    const mbti = await this.prismaService.mbti.findFirst({
      where: {
        type: type,
      },
    });

    return {
      statusCode: HttpStatus.OK,
      data: {
        message: ['결과를 정상적으로 조회했습니다.'],
        mbti,
      },
    };
  }
}
