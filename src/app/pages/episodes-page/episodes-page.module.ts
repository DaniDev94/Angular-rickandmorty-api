import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesPageRoutingModule } from './episodes-page-routing.module';
import { EpisodesPageComponent } from './episodes-page.component';


@NgModule({
  declarations: [
    EpisodesPageComponent
  ],
  imports: [
    CommonModule,
    EpisodesPageRoutingModule
  ]
})
export class EpisodesPageModule { }
