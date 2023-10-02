import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResultsModule } from './results/results.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [PrismaModule, ResultsModule, UsersModule, ChatModule],
})
export class AppModule {}
