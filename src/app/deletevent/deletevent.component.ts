import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-admin',
  templateUrl: 'deletevent.component.html',
  styleUrls: ['deletevent.component.css']
})
export class DeleteEventComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }



  ngOnInit() {
  }
  logout() {
    this.router.navigate(['events']);
  }

}


