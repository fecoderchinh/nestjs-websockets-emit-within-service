import { Module } from '@nestjs/common/decorators';
import { ChatGateway } from './chat.gateway';
import { RoomModule } from 'src/room/room.module';
import { forwardRef } from '@nestjs/common';
import { RoomService } from 'src/room/room.service';

@Module({
  imports: [forwardRef(() => RoomModule)],
  providers: [ChatGateway, RoomService],
  exports: [ChatGateway],
})
export class ChatModule {}
