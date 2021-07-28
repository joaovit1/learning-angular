import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    AssignmentThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
