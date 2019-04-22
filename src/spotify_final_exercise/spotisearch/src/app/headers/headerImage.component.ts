import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-image',
  template:  `<header id="header">
  <img src="assets/logo.png" alt="Logo" id="logo">
</header> `,
  styles: [`#header { display: flex; border: 5px solid black; justify-content: center;}
  #logo { width: 5%; height: 5%; text-align: center;`]
})
export class HeaderImageComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
