import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async getToken() {
    const user = await this.usersService.create();

    const payload = {
      userId: user.id,
    };

    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: ['사용자의 토큰이 정상적으로 생성되었습니다.'],
        user: {
          id: user.id,
          accessToken: await this.jwtService.signAsync(payload),
          createdAt: user.createdAt,
        },
      },
    };
  }
}
