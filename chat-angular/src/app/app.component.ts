import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private chatService: ChatService) {}
  messages = [];

  ngOnInit(): void {
    this.chatService.openChatConnection();
    this.chatService.joinRoom(1); //some unique id can be passed

    this.loadMessages();

    this.chatService.getMessage().subscribe((message) => {
      if (message['type'] === 'message') {
        this.messages.push(message['data']);
      }
    });
  }

  loadMessages(): void {
      this.messages = [
        {
          type: 'text',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          reply: false,
          date: new Date(),
          name: 'Frodo Baggins',
          avatar:
            'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg',
        },
        {
          type: 'text',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          reply: false,
          date: new Date(),
          name: 'Meriadoc Brandybuck',
          avatar:
              'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg',
        },
        {
          type: 'text',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          reply: false,
          date: new Date(),
          name: 'Gimli Gloin',
          avatar: '',
        },
        {
          type: 'text',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          reply: false,
          date: new Date(),
          name: 'Dancing Rose',
          avatar: '',
  
        },
        {
          type: 'text',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
          reply: false,
          date: new Date(),
  
          name: 'Gandolf Grey',
          avatar:
              'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg',
  
        },
      ]
    
  }

  
  sendMessage(msg: any) {
    if (msg) {
      this.chatService.sendMessage({
        message: msg,
        data_repository_uid: 1, // id can be from db
      });
    }
  }

  ngOnDestroy() {
    this.chatService.closeChatConnection();
  }
}
