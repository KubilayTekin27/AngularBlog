import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  iscanlog = false;
  username: string;
  password: string;
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }
  onLogin(): void {
    this.http.get('https://blog-27854-default-rtdb.firebaseio.com/users.json').subscribe((data: any) => {
      Object.keys(data).forEach((key: any) => {
        const user = data[key];
        if (user.username === this.username && user.password === this.password) {
          this.iscanlog = true;
        }
      });
    });
    setTimeout(() => {
      if (this.iscanlog === true) {
        this.iscanlog = false;
        this.router.navigate(['/home']);
      }
      else {
        console.log('başarısız');
      }
    }, 2000);
  }
}
