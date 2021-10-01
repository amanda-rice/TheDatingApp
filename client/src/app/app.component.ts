import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) {
    
  }
  ngOnInit() {
    this.getUsers()
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response
    }, error => {
      console.log(error)
    })
  }
}
