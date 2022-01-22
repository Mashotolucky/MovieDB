import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ActorsComponent } from './components/actors/actors/actors.component';
import { Movie } from './components/movie.list.items/movie.list.items.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { SearchComponent } from './components/search/search.component';
import { DetailsComponent } from './components/details/details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Details } from './components/details.page/details.page.component';
import { Movie } from './components/movie.details/movie.details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ActorsComponent,
    Movie.List.ItemsComponent,
    CarousalComponent,
    SearchComponent,
    DetailsComponent,
    CommentsComponent,
    HomepageComponent,
    Details.PageComponent,
    Movie.DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
