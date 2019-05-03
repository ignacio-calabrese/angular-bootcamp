import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify-service.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placeholder: string;
  constructor(private SpotifyService : SpotifyService) {
    this.placeholder = 'Type the name of your favourite artist';
  }

  ngOnInit() {
    // this.SpotifyService.getToken();
  }

}
