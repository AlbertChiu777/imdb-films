import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCategoryComponent } from './film-category/film-category.component';

const routes: Routes = [
  {
    path: 'film/list',
    component: FilmCategoryComponent
  },
  {
    path: 'film/:id',
    component: FilmDetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'film/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
