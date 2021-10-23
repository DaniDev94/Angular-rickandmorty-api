import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesPageRoutingModule } from './episodes-page-routing.module';
import { EpisodesPageComponent } from './episodes-page.component';
import { EpisodesGalleryPageComponent } from './pages/episodes-gallery-page/episodes-gallery-page.component';


@NgModule({
  declarations: [
    EpisodesPageComponent,
    EpisodesGalleryPageComponent
  ],
  imports: [
    CommonModule,
    EpisodesPageRoutingModule
  ]
})
export class EpisodesPageModule { }
