import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {

  placeholder: string;
  constructor() {
    this.placeholder = 'Search for your favourite artist here';
  }

  ngOnInit() {
  }

}
