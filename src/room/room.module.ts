import { Module } from '@nestjs/common/decorators';
import { ChatModule } from '../chat/chat.module';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

@Module({
  imports: [ChatModule],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
