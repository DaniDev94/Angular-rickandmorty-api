import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Importamos los modulos.ts de cada componente
  {path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: 'characters', loadChildren: () => import('./pages/characters-page/characters-page.module').then(m => m.CharactersPageModule)},
  {path: 'locations', loadChildren: () => import('./pages/locations-page/locations-page.module').then(m => m.LocationsPageModule)},
  {path: 'episodes', loadChildren: () => import('./pages/episodes-page/episodes-page.module').then(m => m.EpisodesPageModule)},
  {path: 'about', loadChildren: () => import('./pages/about-page/about-page.module').then(m => m.AboutPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
