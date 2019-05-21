import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-front',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FrontPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

}
