import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat/chat-form/chat-form.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
