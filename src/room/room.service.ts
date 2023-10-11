import { Injectable } from '@nestjs/common/decorators';
import { ChatGateway } from '../chat/chat.gateway';

@Injectable()
export class RoomService {
  constructor(private gateway: ChatGateway) {}

  public async ping(): Promise<void> {
    this.gateway.server.emit('chat', 'success!');
  }
}
