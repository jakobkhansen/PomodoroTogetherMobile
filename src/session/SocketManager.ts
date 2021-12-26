import { Socket } from "socket.io-client";

export class SocketManager {
  private static instance : SocketManager

  constructor(private socket : Socket) {
    SocketManager.instance = this
  }

  public emit(event : string, ...messages : string[]) : void {
    console.log(event, ...messages)
    this.socket.emit(event, ...messages)
  }

  public on(event : string, callback : (...args : any[]) => void) {
    this.socket.on(event, callback)
  }

  public disconnect() {
    this.socket.disconnect()
  }


  public sendPause() {
    this.socket.emit('session pause')
  }

  public sendUnpause() {
    this.socket.emit('session unpause')
  }

  public sendStart(seconds : number) {
    this.socket.emit('session start', seconds)
  }

  static getInstance() : SocketManager {
    return this.instance
  }

}
