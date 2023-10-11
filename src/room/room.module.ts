import { Module } from "@nestjs/common/decorators";
import { RoomService } from "./room.service";
import { RoomController } from "./room.controller";

@Module({
    controllers: [RoomController],
    providers: [RoomService],
    exports: [RoomService],
  })
  export class RoomModule {}