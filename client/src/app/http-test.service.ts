import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpTestService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('https://localhost:5001/api/users')
  }
}
