import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const routes:Routes=[
  {path:'',component:SearchComponent},
  {path:'about',component:AboutComponent},
  {path: 'artist/:id', component:ArtistComponent},
  {path: 'album/:id', component:AlbumComponent}
]

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpModule ],
  declarations: [ AlbumComponent, AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent ],
  providers:    [ SpotifyService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
