import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-event',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventComponent implements OnInit {

  events: any;

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
    this.http.get('/eve').subscribe(data => {
      console.log(data);
      this.events = data;
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }
  deleteBook(id) {
    this.http.delete('/eve/'+id)
      .subscribe(res => {
          this.router.navigate(['/deletevent']);
        }, (err) => {
          console.log(err);
        }
      );
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
