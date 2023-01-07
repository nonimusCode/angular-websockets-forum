import { EventEmitter, Injectable, ViewChild, ElementRef } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SockectService  {

  public bodychat : any[] = []

  outEven: EventEmitter<any> = new EventEmitter()

  @ViewChild('messageForm') messageForm: ElementRef

  constructor(
    private cookie: CookieService,
    private socket: Socket) {
    this.listen()
  }
  listen() {
    this.socket.on('forward message' , (data : any ) => {
      console.log(data);
      this.bodychat.push(data)
    })
  }
  Emiter(payload: any) {
    this.socket.emit('send email' , payload)
  }
}
