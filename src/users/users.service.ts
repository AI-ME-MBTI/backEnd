import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { v1 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create() {
    const user = await this.prismaService.users.create({
      data: {
        id: uuid(),
        createdAt: new Date(),
      },
    });

    return user;
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
