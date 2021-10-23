import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-gallery-page',
  templateUrl: './locations-gallery-page.component.html',
  styleUrls: ['./locations-gallery-page.component.scss']
})
export class LocationsGalleryPageComponent implements OnInit {

  @Input() locations: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
