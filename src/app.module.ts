import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResultsModule } from './results/results.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, ResultsModule, UsersModule],
})
export class AppModule {}
