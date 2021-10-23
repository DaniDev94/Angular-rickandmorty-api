import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersPageRoutingModule } from './characters-page-routing.module';
import { CharactersPageComponent } from './characters-page.component';
import { CharactersGalleryPageComponent } from './pages/characters-gallery-page/characters-gallery-page.component';
import { CharactersDetailsPageComponent } from './pages/characters-details-page/characters-details-page.component';


@NgModule({
  declarations: [
    CharactersPageComponent,
    CharactersGalleryPageComponent,
    CharactersDetailsPageComponent
  ],
  imports: [
    CommonModule,
    CharactersPageRoutingModule
  ]
})
export class CharactersPageModule { }
