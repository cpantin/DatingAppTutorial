import { Component, OnInit } from '@angular/core';
import { HttpTestService } from './http-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

  constructor(private http:HttpTestService){}

  ngOnInit(): void {
      this.http.getUsers().subscribe(response =>{
        this.users = response;
      }, error =>{console.log(error)})
  }
}


