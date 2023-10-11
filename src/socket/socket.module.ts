import { Module } from "@nestjs/common/decorators";
import { ChatModule } from "src/chat/chat.module";
import { RoomModule } from "src/room/room.module";

@Module({
    imports: [ChatModule, RoomModule],
})
export class SocketsModule {}