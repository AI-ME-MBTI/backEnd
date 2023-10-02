import { Controller } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  getQuestion() {
    return this.chatService.getQuestion();
  }

  createAnswer(createAnswerDto: CreateAnswerDto) {
    return this.chatService.createAnswer(createAnswerDto);
  }
}
