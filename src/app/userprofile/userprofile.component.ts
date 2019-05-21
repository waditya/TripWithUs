import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-book',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserProfile implements OnInit {

  books: any;

  constructor(private http: HttpClient, private router: Router) { }

  // Getting all data from the service
  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

// Logout functionality to Login Screen
  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}

