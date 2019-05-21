import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-admin',
  templateUrl: 'delete.component.html',
  styleUrls: ['delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }



  ngOnInit() {
  }
  logout() {
    this.router.navigate(['dests1']);
  }

}


