import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-image-search',
  template:  `<header class="header">
  <img src="assets/logo.png" alt="Logo" id="logo">
  <div id="search-top">
    <app-search [placeholder]= "placeholder"></app-search>
  </div>
</header> `,
  styles: [`.header { display: flex; position: relative;
    align-items: center; align-content:space-between; border: 5px solid black;}
  #logo { width: 5%; height: 5%;}
  #search-top {width: 60%; position: absolute; right: 0; top: 40%; }`]
})
export class HeaderImageSearchComponent implements OnInit {

  placeholder: string;
  constructor() {
    this.placeholder = 'Search for another artist';
  }

  ngOnInit() {
  }

}
