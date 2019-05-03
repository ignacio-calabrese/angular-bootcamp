import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify-service.service';
import { from } from 'rxjs';
import { Track } from '../classes/track';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tracks: Track[] = [];
  track = Track;
  favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  placeholder: string;
  constructor(private SpotifyService : SpotifyService) {
    this.placeholder = 'Type the name of your favourite artist';
  }

  ngOnInit() {
    // this.SpotifyService.getToken();
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (this.favorites != null && this.favorites > 0) {
      for (let i = 0; i < this.favorites.length; i++) {
        this.getATrack(this.favorites[i]);
      }
    }
    
     
  }

  getATrack(idTrack: string){
    this.SpotifyService.getATrack(idTrack).pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((data: Track): any => {
          console.log(data);
          this.tracks.push(<Track> data);
        });
      }
}
