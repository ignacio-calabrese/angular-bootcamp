import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placeholder: string;
  constructor() {
    this.placeholder = 'Type the name of your favourite artist';
  }

  ngOnInit() {
  }

}
