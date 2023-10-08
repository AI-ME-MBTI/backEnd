import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(AuthGuard)
  @Get()
  getQuestion(@Req() req) {
    return this.chatService.getQuestion(req.userId);
  }

  @UseGuards(AuthGuard)
  @Post('/:questionId')
  createAnswer(
    @Param() questionId: string,
    @Body() createAnswerDto: CreateAnswerDto,
    @Req() req,
  ) {
    return this.chatService.createAnswer(
      req.userId,
      questionId,
      createAnswerDto,
    );
  }
}
