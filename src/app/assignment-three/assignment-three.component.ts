import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.scss']
})
export class AssignmentThreeComponent implements OnInit {

  displayDetails = false;
  displayClicks = []

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetails = () =>{
    this.displayDetails = !this.displayDetails
    let date = new Date()
    this.displayClicks.push(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  }

}
