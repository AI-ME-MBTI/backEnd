import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResultsModule } from './results/results.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [PrismaModule, ResultsModule, UsersModule, AuthModule, ChatModule],
})
export class AppModule {}
