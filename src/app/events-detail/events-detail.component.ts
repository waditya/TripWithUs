import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsDetailComponent implements OnInit {

  events = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.http.get('/eve/'+id).subscribe(data => {
      this.events = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/eve/'+id)
      .subscribe(res => {
          this.router.navigate(['/events']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
