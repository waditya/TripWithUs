import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      console.log(data);
      this.books = data;
    });
    this.getBookDetail(this.route.snapshot.params['id']);
  }


  getBookDetail(id) {
    this.http.get('/book/'+id).subscribe(data => {
      this.books = data;
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }
  deleteBook(id) {
    this.http.delete('/book/'+id)
      .subscribe(res => {
          this.router.navigate(['/books']);
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
