import { Module } from "@nestjs/common/decorators";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketsModule } from "./socket/socket.module";

@Module({
  imports: [SocketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
