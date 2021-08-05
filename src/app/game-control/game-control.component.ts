import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() incrementTime = new EventEmitter<{count:number}>();
  time:number = 0
  ref:NodeJS.Timer;

  constructor() { }

  ngOnInit() {
  }

  stopGame(){
    clearInterval(this.ref)
  }

  startGame(){
    this.ref = setInterval(()=>{
      this.increment()
    },1000)
  }

  increment(){
    this.time++
    this.incrementTime.emit({
      count:this.time
    })
    
  }

}
