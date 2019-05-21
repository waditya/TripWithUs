import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-admin',
  templateUrl: 'success.component.html',
  styleUrls: ['success.component.css']
})
export class SuccessComponent implements OnInit {


  constructor(private http: HttpClient, private router: Router) { }



  ngOnInit() {
  }
  logout() {
    this.router.navigate(['dests1']);
  }

}
