import { Paging } from './classes/paging';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './classes/artist';
import { Album } from './classes/album';
import { Track } from './classes/track';
import { catchError, map, tap, switchMap} from 'rxjs/operators';




    @Injectable({
      providedIn: 'root'
    })


    export class SpotifyService {
    // tslint:disable-next-line:max-line-length
    token = 'Bearer BQDWAT-Y4BfCM8Az-dVW7_p9_iNHzgGb3Bvrkhycf86w7hzncKD_rzL5bAeATw3pYqjiyYOOFqkVkWfU-pVG3lSqtL9sgUR2M1psaXGEWT5bBk7z-9J_EoluvkeNrCU6BfzGvk7VtzAiAHLfmdhrnTNqMucf2S76bQ1pbRE';
    private ClIENT_ID = '90fdce3922ce4fc7b93e72cc89f05ccc';
    private ClIENT_SECRET = '9661ba540c2b43b7961620baf4783fe5';


  constructor(private http: HttpClient) {

  }


 getQuery(query: string) {
  const url = `https://api.spotify.com/v1/${ query }`;
  const headers = new HttpHeaders({
    Authorization: this.token
  });

  return this.http.get(url, { headers });
}

getArtists( term: string): Observable<Artist[]> {
  return this.getQuery(`search?q=${ term }&type=artist`).pipe(
    map(data => data['artists'].items)
    );
}

getAlbums( term: string): Observable<Album[]> {
  return this.getQuery(`search?q=${ term }&type=album`).pipe(
    map(data => data['albums'].items)
    );
}

getTracks( term: string): Observable<Track[]> {
  return this.getQuery(`search?q=${ term }&type=track`).pipe(
    map(data => data['tracks'].items)
    );
}




getPagingArtists( term: string, num: number): Observable<Paging> {
  return this.getQuery(`search?q=${ term }&type=artist&offset=${num}&limit=20`).pipe(
    map(data => data['artists'])
    );
  }
  
  getAnArtist(artistId: string): Observable<Artist> {
    return this.getQuery(`artists/${artistId}`).pipe(
      map(data => <Artist> data)
      );
  }

  getAnArtistAlbums(artistId: string, num: number): Observable<Paging> {
    return this.getQuery(`artists/${artistId}/albums?&offset=${num}&limit=20`).pipe(
      map(data => <Paging> data)
      );
  }

  getAnAlbum(albumId: string): Observable<Album> {
    return this.getQuery(`albums/${albumId}`).pipe(
      map(data => <Album> data)
      );
  }

  getAnAlbumTracks(albumId: string, num: number): Observable<Paging> {
    return this.getQuery(`albums/${albumId}/tracks?&offset=${num}&limit=20`).pipe(
      map(data => <Paging> data)
      );
  }
/*
getToken() {
  const url = `https://accounts.spotify.com/api/token?grant_type=client_credentials`;
  const tokenHeaders = new HttpHeaders({
    set(Content-Type: 'application/x-www-form-urlencoded');
  "Authorization": 'Basic <base64 encoded' + this.ClIENT_ID + ':' + this.ClIENT_SECRET + '>'
  });
  return this.http.post(url, {tokenHeaders}).pipe(
    // debounceTime(3600)
    )
    .subscribe((data): any => {
          console.log(data);
          this.token = data['token_type'] + ' ' + data['access_token'];
          console.log(this.token);
        });
  }*/


}

