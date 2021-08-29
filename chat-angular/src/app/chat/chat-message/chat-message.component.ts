import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent implements OnInit {

  @Input() type: any;  // Types can be text,link,file etc
  @Input() message: any;
  @Input() reply: any;
  @Input() sender: any;
  @Input() date: any;
  @Input() files: any;
  @Input() avatar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
