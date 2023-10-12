import { Controller, Get } from '@nestjs/common/decorators';
import { RoomService } from './room.service';

@Controller({
  path: 'rooms',
})
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Get('/ping')
  async ping(): Promise<void> {
    this.roomService.ping();
  }

  @Get('/pong')
  async pong(): Promise<void> {
    this.roomService.pong();
  }
}
