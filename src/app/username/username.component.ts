import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  username=""
  usersList = ['User1','User2']

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername = () =>{
    this.username=""
  }

  getColor = () =>{
    return this.username !==''? 'green' : 'red'
  }

  addUsername = () =>{
	  this.usersList.push(this.username)
	  console.log(this.usersList)
  }

}
