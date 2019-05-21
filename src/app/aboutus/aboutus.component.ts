import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: 'aboutus.component.html',
  styleUrls: ['aboutus.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  logout() {
    this.router.navigate(['']);
  }

}
