import { MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { RoomService } from "src/room/room.service";
import { Server, Socket } from 'socket.io';
import { Logger } from "@nestjs/common/services";

@WebSocketGateway({
    cors: true,
    namespace: 'websocket',
    transports: ['websocket'],
})
export class ChatGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
    constructor(
        private roomService: RoomService,
    ) {}

    @WebSocketServer()
    public server: Server = new Server();

    private logger = new Logger('ChatGateway');

    afterInit(server: Server) {
        this.roomService.server = server
    }

    @SubscribeMessage('chat')
    async handleChatEvent(@MessageBody() payload: string): Promise<void> {
        try {
            this.server.emit('chat', payload);
        } catch (error) {
            console.log('error :>> ', error);
        }
    }

    async handleConnection(socket: Socket): Promise<void> {
        this.logger.log(`Socket connected: ${socket.id}`)
    }

    async handleDisconnect(socket: Socket): Promise<void> {
        this.logger.log(`Socket disconnected: ${socket.id}`);
    }
}
  