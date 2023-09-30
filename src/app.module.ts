import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResultsModule } from './results/results.module';

@Module({
  imports: [PrismaModule, ResultsModule],
})
export class AppModule {}
