import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
})
export class ChatFormComponent implements OnInit {
  @Output() newMessage = new EventEmitter<any>();
  myNewMessage: any;
  constructor() {}

  ngOnInit(): void {}
  fun_sendMessage() {
    this.newMessage.emit(this.myNewMessage);
    this.myNewMessage='';
  }
}
