import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { filter, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Artist } from '../classes/artist';
import { Paging } from '../classes/paging';
import { Album } from '../classes/album';
import { Track } from '../classes/track';
import { Disc } from '../classes/disc';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  term: string;
  idAlbum: string;
  artist: Artist[] = [];
  paging: Paging;
  album: Album;
  tracks: Track[] = [];
  discs: Disc[] = [];
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
    this.idAlbum = this.route.snapshot.paramMap.get('idAlbum');
  this.term = this.route.snapshot.paramMap.get('term');
  this.SpotifyService.getAnAlbum(this.idAlbum).pipe(
    debounceTime(300),
    distinctUntilChanged(),
  ).subscribe((data: Album): any => {
        // console.log(data);
        this.album = <Album> data;
  });

  this.SpotifyService.getAnAlbumTracks(this.idAlbum, this.num).pipe(
    debounceTime(300),
    distinctUntilChanged(),
  ).subscribe((data: Paging): any => {
        console.log(data);
        this.paging = <Paging> data;
        this.tracks = <Track[]> this.paging.items;
        this.orderByDisc(this.tracks);
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

  getAnAlbumTracks(idAlbum: string, num: number) {
  this.SpotifyService.getAnAlbumTracks(idAlbum, num).pipe(
    debounceTime(300),
    distinctUntilChanged(),
  ).subscribe((data: Paging): any => {
        console.log(data);
        this.paging = <Paging> data;
        this.tracks = <Track[]>  this.paging.items;
        this.total = this.paging.total;
        this.offset = this.paging.offset;
        this.limit = this.paging.limit;
        this.orderByDisc(this.tracks);
  });
  }

  getPreviousPage() {
    this.num = this.offset - 1;
    if (this.num >= 0) {
      this.getAnAlbumTracks(this.idAlbum, this.num);
    }
  }

  getNextPage() {
    this.num = this.offset + 1;
    if (this.num <= this.numPage) {
      this.getAnAlbumTracks(this.idAlbum, this.num);
    }
  }

  getPage(page: number) {
    this.num = page;
    if (this.num >= 0 || this.num <= this.numPage) {
      this.getAnAlbumTracks(this.idAlbum, this.num);
    }
  }

  orderByDisc(tracks: Track[]){
  //let disc = Disc;
  let numberDisc = 1;
  let numberTrack=0;
  let discTracks: Track[] = [];
  
  for (let i = 0; i < tracks.length; i++) {
    if (numberDisc == tracks[i].disc_number) {
      if (numberTrack != tracks[i].track_number) {
        discTracks.push(tracks[i]);
        numberTrack++;
      } 
      this.discs.push(new Disc(numberDisc, discTracks));
    } else if (numberDisc != tracks[i].disc_number) {
      numberDisc++;
    }
    console.log(this.discs);
    
  }
  
  }
}
