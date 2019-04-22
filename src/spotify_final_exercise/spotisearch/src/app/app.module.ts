import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpotifyServiceService } from './spotify-service.service';
import { SearchComponent } from './search/search.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderImageComponent } from './headers/headerImage.component';
import { HeaderImageSearchComponent } from './headers/headerImageSearch.component';
import { from } from 'rxjs';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '*', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'Artists', component: ArtistsListComponent},
  { path: 'Artist', component: ArtistComponent},
  { path: 'Album', component: AlbumComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderImageComponent,
    HeaderImageSearchComponent,
    ArtistsListComponent,
    HomeComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
