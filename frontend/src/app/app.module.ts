import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ActorsComponent } from './components/actors/actors.component';
import { MoviesListItemsComponent } from './components/movies-list-items/movies-list-items.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { SearchComponent } from './components/search/search.component';
import { CommentsComponent } from './components/comments/comments.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ActorsComponent,
    MoviesListItemsComponent,
    CarousalComponent,
    SearchComponent,
    CommentsComponent,
    HomepageComponent,
    DetailsPageComponent,
    MovieDetailsComponent,
    LoginComponent,
    SignupComponent,
    GalleryComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    //NgModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
