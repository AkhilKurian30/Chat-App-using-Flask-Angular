import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ChatService {

  private socket:any;

  constructor() { }

  openChatConnection() {

    let bearerToken = ''; //get jwt token 


    this.socket = io(environment.socketUrl, {
      extraHeaders: {
        Authorization: 'Bearer ' + bearerToken,
      },
      // transports: ['websocket'],
    });
    this.socket.on('connect', () => {
      this.socket.emit('my event', {
        data: 'User Connected',
      });
    });
  }


  sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  joinRoom(data_repository_id:any) {
    this.socket.emit('join', data_repository_id);
  }

  public getMessage = () => new Observable(observer => {
    this.socket.on('message',message => {
      observer.next(message);
    });
  });

  closeChatConnection() {
    this.socket.close();
    this.socket = null;
  }
}
