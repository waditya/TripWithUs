
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-book',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/eve').subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }


  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}


