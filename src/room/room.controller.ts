import { Body, Controller, Get, Param } from "@nestjs/common/decorators";
import { RoomService } from "./room.service";

@Controller({
  path: 'rooms',
})
export class RoomController {
  constructor(
    private roomService: RoomService
  ) {}

  @Get('/')
  async ping(): Promise<void> {
    this.roomService.ping()
  }
}
