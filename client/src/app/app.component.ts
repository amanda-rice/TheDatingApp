import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Lifecycle event after constructor is initialization
export class AppComponent implements OnInit{
  title = 'The Dating app';
  // No type safety with any
  users: any;
  //Naturally Async request
  constructor(private accountService: AccountService) {
    
  }
  ngOnInit() {
    this.setCurrentUser()
  }
  setCurrentUser() {
    const temp: string | null = localStorage.getItem('user');
    const user: User = JSON.parse(temp == null ? '' : temp);
    this.accountService.setCurrentUser(user)
  }
}
