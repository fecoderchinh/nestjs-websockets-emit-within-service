import { Module } from '@nestjs/common/decorators';
import { ChatModule } from '../chat/chat.module';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { ChatGateway } from 'src/chat/chat.gateway';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [forwardRef(() => ChatModule)],
  controllers: [RoomController],
  providers: [RoomService, ChatGateway],
})
export class RoomModule {}
