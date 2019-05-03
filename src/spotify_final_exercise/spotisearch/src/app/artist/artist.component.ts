import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { filter, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Artist } from '../classes/artist';
import { Paging } from '../classes/paging';
import { Album } from '../classes/album';



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {
  term: string;
  ArtistId: string;
  artist: Artist;
  paging: Paging;
  albums: Album[] = [];
  num = 0;
  limit = 0;
  offset = 0;
  total = 0;
  numPage = 0;
  arrayPage = new Array();
  
  constructor(private SpotifyService: SpotifyService,
    private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
   this.ArtistId = this.route.snapshot.paramMap.get('idArtist');
  this.term = this.route.snapshot.paramMap.get('term');
  this.SpotifyService.getAnArtist(this.ArtistId).pipe(
    debounceTime(300),
    distinctUntilChanged(),
  ).subscribe((data: Artist): any => {
        console.log(data);
        this.artist = <Artist> data;
  });

  this.SpotifyService.getAnArtistAlbums(this.ArtistId, this.num).pipe(
    debounceTime(300),
    distinctUntilChanged(),
  ).subscribe((data: Paging): any => {
        console.log(data);
        this.paging = <Paging> data;
        this.albums = <Album[]> this.paging.items;
        this.total = this.paging.total;
          this.offset = this.paging.offset;
          this.limit = this.paging.limit;
         if (this.total % this.limit == 0) {
            this.numPage = this.total / this.limit;
          } else if (this.total % this.limit > 0) {
            this.numPage = Math.trunc(this.total / this.limit) + 1;
          } 
          console.log( this.numPage );
          for ( let i = 0; i < this.numPage; i++) {
            this.arrayPage.push(i);
          }
  });
  }

 getAnArtistAlbums(ArtistId: string, num: number) {
  this.SpotifyService.getAnArtistAlbums(ArtistId, num).pipe(
    debounceTime(300),
    distinctUntilChanged(),
  ).subscribe((data: Paging): any => {
        console.log(data);
        this.paging = <Paging> data;
        this.albums = <Album[]> this.paging.items;
        this.total = this.paging.total;
       this.offset = this.paging.offset;
       this.limit = this.paging.limit;
  });
  }

  getPreviousPage() {
    this.num = this.offset - 1;
    if (this.num >= 0) {
      this.getAnArtistAlbums(this.ArtistId, this.num);
    }
  }

  getNextPage() {
    this.num = this.offset + 1;
    if (this.num <= this.numPage) {
      this.getAnArtistAlbums(this.ArtistId, this.num);
    }
  }

  getPage(page: number) {
    this.num = page;
    if (this.num >= 0 || this.num <= this.numPage) {
      this.getAnArtistAlbums(this.ArtistId, this.num);
    }
  }
}
