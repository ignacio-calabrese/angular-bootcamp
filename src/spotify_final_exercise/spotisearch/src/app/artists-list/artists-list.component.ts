import { Component, OnInit } from '@angular/core';
import { Artist } from '../classes/artist';
import { Album } from '../classes/album';
import { Track } from '../classes/track';
import { SpotifyService } from './../spotify-service.service';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged , map} from 'rxjs/operators';
import { Paging } from '../classes/paging';


@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})

export class ArtistsListComponent implements OnInit {
  term: string;
  placeholder: string;
  paging: Paging;
  artists: Artist[] = [];
  num = 0;
  limit = 0;
  offset = 0;
  total = 0;
  numPage = 0;
  arrayPage = new Array();



  constructor(private SpotifyService: SpotifyService,
    private route: ActivatedRoute
  ) {
    this.placeholder = 'Search for your favourite artist here';
  }


  ngOnInit() {
    this.term = this.route.snapshot.paramMap.get('term');
    this.SpotifyService.getPagingArtists(this.term, this.num).pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe((data: Paging): any => {
          this.paging = data;
          this.artists = <Artist[]>this.paging.items;
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

  getPagingArtists(term: string, num: number) {
    this.SpotifyService.getPagingArtists(term, num).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      ).subscribe((data: Paging): any => {
            this.paging = data;
            this.artists = <Artist[]>this.paging.items;
            this.total = this.paging.total;
            this.offset = this.paging.offset;
            this.limit = this.paging.limit;
    });
  }
 
  getPreviousPage() {
    this.num = this.offset - 1;
    if (this.num >= 0) {
      this.getPagingArtists(this.term, this.num);
    }
  }

  getNextPage() {
    this.num = this.offset + 1;
    if (this.num <= this.numPage) {
      this.getPagingArtists(this.term, this.num);
    }
  }

  getPage(page: number) {
    this.num = page;
    if (this.num >= 0 || this.num <= this.numPage) {
      this.getPagingArtists(this.term, this.num);
    }
  }
}
