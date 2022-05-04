import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from "@nestjs/websockets";
import { Socket, Server } from "socket.io";

@WebSocketGateway()
export class Gateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  @SubscribeMessage("message")
  handleMessage(client: Socket, payload: string): void {
    this.server.emit("message", payload);
  }

  afterInit(server: Server): any {
    console.log("init");
  }

  handleConnection(client: Socket, ...args: any[]): any {
    console.log("client connected: " + client.id);
  }

  handleDisconnect(client: any): any {
    console.log("client disconnected: " + client.id);
  }
}
