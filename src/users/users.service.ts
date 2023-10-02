import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v1 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create() {
    const user = await this.prismaService.users.create({
      data: {
        id: uuid(),
        mbti: null,
        createdAt: new Date(),
      },
    });

    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: ['사용자가 정상적으로 생성되었습니다.'],
        user: {
          id: user.id,
          createdAt: user.createdAt,
        },
      },
    };
  }

  async findUser(userId: string) {
    const user = await this.prismaService.users.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }
}
