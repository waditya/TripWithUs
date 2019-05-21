import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-create',
  templateUrl: './events-create.component.html',
  styleUrls: ['./events-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EventsCreateComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/eve', this.book)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['success-event']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
