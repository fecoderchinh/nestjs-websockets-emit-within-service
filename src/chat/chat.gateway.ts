import { Inject, forwardRef } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RoomService } from 'src/room/room.service';

@WebSocketGateway({
  cors: true,
  namespace: 'websocket',
  transports: ['websocket'],
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{

  constructor(private readonly roomService: RoomService){}

  @WebSocketServer()
  public server: Server;
  private logger = new Logger('ChatGateway');

  afterInit(server: Server) {
    // this.roomService.server = server;
  }

  @SubscribeMessage('ping')
  async handlePingEvent(@MessageBody() payload: string): Promise<void> {
    try {
      this.server.emit('ping', payload);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  @SubscribeMessage('pong')
  async handlePongEvent(@MessageBody() payload: string): Promise<void> {
    try {
      const getValue = await this.roomService.pong();
      this.server.emit('pong', getValue);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }

  async handleConnection(socket: Socket): Promise<void> {
    this.logger.log(`Socket connected: ${socket.id}`);
  }

  async handleDisconnect(socket: Socket): Promise<void> {
    this.logger.log(`Socket disconnected: ${socket.id}`);
  }
}
