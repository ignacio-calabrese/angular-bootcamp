import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' ,'Authorization': '')
};

@Injectable({
  providedIn: 'root'
})


export class SpotifyServiceService {
  private Client_ID: string = '';
  private Client_Secret: string = '';
  private artistURL: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.Client_ID + '&q=';

  constructor(private http: HttpClient) {

  }


  searchArtist(searchTerm: string): Observable<any[]> {
    // const url = this.artistURL + searchTerm;
    // return this.http.get<any[]>(url, httpOptions);
    return this.http.get('https://api.spotify.com/v1/artists/').map(res => res.json());
  }
}

