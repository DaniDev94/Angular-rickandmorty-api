import { LocationsDetailsPageComponent } from './pages/locations-details-page/locations-details-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsPageComponent } from './locations-page.component';

const routes: Routes = [
  {path: '', component: LocationsPageComponent},
  {path: ':id', component:LocationsDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsPageRoutingModule { }
