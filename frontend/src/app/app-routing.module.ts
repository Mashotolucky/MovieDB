import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { MoviesListItemsComponent } from './components/movies-list-items/movies-list-items.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path: 'details',component: DetailsPageComponent },
  {path: 'signup', component: SignupComponent},
  {path: '', component: MoviesListItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
