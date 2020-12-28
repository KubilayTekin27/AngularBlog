import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  header: string;
  content: string;
  blogList = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getmassage();
  }
  getmassage(): void {
    this.blogList = [];
    this.http.get('https://blog-27854-default-rtdb.firebaseio.com/blogmassage.json').subscribe((data: any ) => {
      Object.keys(data).forEach(key => {
        const massage = data[key];
        this.blogList.push(massage);
      });
    });
  }
  postmassage(): void {
    const massageobj = {
      header: this.header,
      content: this.content
    };
    this.http.post('https://blog-27854-default-rtdb.firebaseio.com/blogmassage.json', massageobj).subscribe();
    setTimeout(() => {
      this.getmassage();
    }, 2000);
  }
}
