import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Artist } from '../classes/artist';
import { Album } from '../classes/album';
import { Track } from '../classes/track';
import { SpotifyService } from './../spotify-service.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {NoimagePipe} from '../image.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;


  artists: Artist[] = [];
  albums: Album[] = [];
  tracks: Track[] = [];

  constructor(private SpotifyService: SpotifyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location ) { }


  ngOnInit() {
    // this.SpotifyService.getToken();

  }

  searchAll(term: string) {
    this.searchByArtists(term);
    this.searchByAlbums(term);
    this.searchByTracks(term);
  }

  searchByArtists(artists: string) {
    this.SpotifyService.getArtists(artists).pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data): any => {
          console.log(data);
          this.artists = data;
        });
  }

  searchByAlbums(albums: string) {
    this.SpotifyService.getAlbums(albums).pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data): any => {
          console.log(data);
          this.albums = data;
        });
  }


  searchByTracks(tracks: string) {
    this.SpotifyService.getTracks(tracks).pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((data): any => {
          console.log(data);
          this.tracks = data;
        });
  }

  searchEnter(term: string) {
    this.router.navigate(['/Artists/' + term ]);
  }

}
