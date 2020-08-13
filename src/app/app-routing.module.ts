import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [
  { path: '', redirectTo: 'authors', pathMatch: 'full'},
  { path: 'authors', component: AuthorListComponent },
  { path: 'newauthor', component: AuthorComponent },
  { path: 'author/:id', component: AuthorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
