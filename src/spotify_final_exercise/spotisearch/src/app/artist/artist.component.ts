import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { filter, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {
  artist: any;
  constructor(private SpotifyService: SpotifyService,
    private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
    this.getArtist();
  }
 getArtist() {
  const ArtistId = this.route.snapshot.paramMap.get('ArtistId');
  this.SpotifyService.getAnArtist(ArtistId).pipe(
    debounceTime(300),
    distinctUntilChanged(),
  ).subscribe((data): any => {
        console.log(data);
        this.artist = data;
      });
    }

}
