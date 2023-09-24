import { Controller, Get, Param } from '@nestjs/common';
import { ResultsService } from './results.service';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get(':type')
  findAll(@Param('type') type: string) {
    return this.resultsService.getResult(type);
  }
}
