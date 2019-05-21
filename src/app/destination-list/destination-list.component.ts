
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-book',
  templateUrl: './destination-list.component.html',
  styleUrls: ['./destination-list.component.css']
})
export class DestinationListComponent implements OnInit {

  books: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      console.log(data);
      this.books = data;
    });
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['dests1']);
  }
  deleteBook(id) {
    this.http.delete('/book/' +id)
      .subscribe(res => {
        this.router.navigate(['delete']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}


