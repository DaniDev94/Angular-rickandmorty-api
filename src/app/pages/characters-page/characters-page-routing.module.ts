import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './characters-page.component';
import { CharactersDetailsPageComponent } from './pages/characters-details-page/characters-details-page.component';

const routes: Routes = [
  {path: '', component: CharactersPageComponent},
  {path: ':id', component: CharactersDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule { }
