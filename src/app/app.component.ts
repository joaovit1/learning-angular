import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  seconds = []
  
  onTimeAdded(data:{count:number}){
    this.seconds.push(data.count)
  }
}
