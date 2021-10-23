import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-gallery-page',
  templateUrl: './episodes-gallery-page.component.html',
  styleUrls: ['./episodes-gallery-page.component.scss']
})
export class EpisodesGalleryPageComponent implements OnInit {

  @Input() episodes: any = [];
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
