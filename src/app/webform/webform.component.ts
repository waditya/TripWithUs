import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-book',
  templateUrl: './webform.component.html',
  styleUrls: ['./webform.component.css']
})
export class WebFormComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient, private router: Router) { }

  // ngOnInit() {
  //   let httpOptions = {
  //     headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  //   };
  //   this.http.get('/book', httpOptions).subscribe(data => {
  //     this.books = data;
  //     console.log(this.books);
  //   }, err => {
  //     if(err.status === 401) {
  //       this.router.navigate(['login']);
  //     }
  //   });
  // }



  ngOnInit() {

  }



}

// import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.css'],
//   encapsulation: ViewEncapsulation.None
// })
// export class BookComponent implements OnInit {

//   books: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     this.http.get('/book').subscribe(data => {
//       console.log(data);
//       this.books = data;
//     });
//   }

// }
