import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { v1 as uuid } from 'uuid';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async getToken() {
    const userId = uuid();

    const payload = {
      userId: userId,
    };

    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: ['사용자의 토큰이 정상적으로 생성되었습니다.'],
        user: {
          id: userId,
          accessToken: await this.jwtService.signAsync(payload),
          createdAt: new Date(),
        },
      },
    };
  }
}
