import { Inject, Injectable } from '@nestjs/common/decorators';
import { ChatGateway } from '../chat/chat.gateway';
import { forwardRef } from '@nestjs/common';

@Injectable()
export class RoomService {
  constructor(@Inject(forwardRef(() => ChatGateway)) private gateway: ChatGateway) {}

  public async ping(): Promise<void> {
    this.gateway.server.emit('ping', 'success!');
  }

  public async pong(): Promise<string> {
    return 'nice!'
  }
}
