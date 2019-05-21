import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsEditComponent implements OnInit {

  book: any = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/eve/'+id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(id) {
    this.book.updated_date = Date.now();
    this.http.put('/eve/'+id, this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
