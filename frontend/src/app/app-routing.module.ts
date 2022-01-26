import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { MoviesListItemsComponent } from './components/movies-list-items/movies-list-items.component';

const routes: Routes = [
  {path: '', component: MoviesListItemsComponent},
  {path: 'details-page',component: DetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
