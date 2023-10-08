import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ResultsService } from './results.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @UseGuards(AuthGuard)
  @Get()
  getResult(@Req() req) {
    return this.resultsService.getMbtiFromAi(req.userId);
  }
}
