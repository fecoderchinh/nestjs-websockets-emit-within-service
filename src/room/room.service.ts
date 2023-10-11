import { Injectable } from "@nestjs/common/decorators";
import { Server } from 'socket.io';

@Injectable()
export class RoomService {
  constructor() {}
  public server: Server

  public async ping(): Promise<void> {
    this.server.emit('chat', 'success!')
  }
}