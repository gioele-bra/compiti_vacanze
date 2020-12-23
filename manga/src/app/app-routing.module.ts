import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangaComponent } from './manga/manga.component';
import { SearchComponent } from './search/search.component';
import { AnimeComponent } from './anime/anime.component';

const routes: Routes = [
  { path: 'manga/:id', component: MangaComponent },
  { path: 'anime/:id', component: AnimeComponent },
  { path: 'search', component: SearchComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
