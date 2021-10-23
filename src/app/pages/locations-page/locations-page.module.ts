import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsPageRoutingModule } from './locations-page-routing.module';
import { LocationsPageComponent } from './locations-page.component';
import { LocationsGalleryPageComponent } from './pages/locations-gallery-page/locations-gallery-page.component';
import { LocationsDetailsPageComponent } from './pages/locations-details-page/locations-details-page.component';


@NgModule({
  declarations: [
    LocationsPageComponent,
    LocationsGalleryPageComponent,
    LocationsDetailsPageComponent
  ],
  imports: [
    CommonModule,
    LocationsPageRoutingModule
  ]
})
export class LocationsPageModule { }
