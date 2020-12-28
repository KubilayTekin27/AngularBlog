import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: string;
  password: string;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onRegist(): void {
    const userobject = {
      username: this.username,
      password: this.password
    };
    this.http.post('https://blog-27854-default-rtdb.firebaseio.com/users.json', userobject).subscribe();
  }
}
