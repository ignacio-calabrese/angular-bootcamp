import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map } from 'rxjs/operators';
import { SpotifyServiceService } from './../spotify-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() placeholder: string;
  search = new FormControl('');;
  SpotifyServiceService: SpotifyServiceService;
  results: any[] = [];

  constructor() { }

  ngOnInit() {
    // this.search = 'the';
    // this.SpotifyServiceService.searchArtist(this.search);
  }
  onKey($event) {
    this.search.setValue($event.target.value);
    // console.log($event.target.value);
    // return this.search.value;
    this.SpotifyServiceService.searchArtist('the').subscribe(results => {
      console.log(results);
    });
    console.log(this.SpotifyServiceService.searchArtist('the'));
  }

  getArtist() {
    this.SpotifyServiceService.searchArtist('the').subscribe(results => {
      console.log(results);
    });
}

}
