import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SpotifyService } from './services/spotify.service';

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: `app.component.html`,
  entryComponents: [SearchComponent, AboutComponent],
  providers: [SpotifyService]
})
export class AppComponent  { name = 'Angular'; }
