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
  offset: number;
  total: number;
  numPage: number;
  arrayPage = new Array();



  constructor(private SpotifyService: SpotifyService,
    private route: ActivatedRoute
  ) {
    this.placeholder = 'Search for your favourite artist here';
  }


  ngOnInit() {
    this.term = this.route.snapshot.paramMap.get('term');
    this.getPagingArtists(this.term, this.num);


  }

  getPagingArtists(term: string, num: number) {
    this.SpotifyService.getPagingArtists(term, num).pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // map(data => data['artists'])
          ).subscribe((data: Paging): any => {
            console.log(data['artists']);
            this.paging = data;
            this.artists = <Artist[]> this.paging.items;
            this.total = this.paging.total;
            this.offset = this.paging.offset;
            if (this.total % this.offset === 0) {
              this.numPage = this.total / this.offset;
            } else {
              this.numPage = (this.total / this.offset) + 1;
            }
            for ( let i = 0; i < this.numPage; i++) {
                this.arrayPage.push(i);
              }


    });
  }

  getPreviousPage() {
    this.num = this.num - this.offset;
    if (this.num >= 0) {
      this.getPagingArtists(this.term, this.num);
    }
  }

  getNextPage() {
    this.num = this.num + this.offset;
    if (this.num <= (this.total - this.offset)) {
      this.getPagingArtists(this.term, this.num);
    }
  }

  getPage(numPage: number) {
    this.num = numPage * this.offset;
    if (this.num >= 0 || this.num <= (this.total - this.offset)) {
      this.getPagingArtists(this.term, this.num);
    }
  }
}
