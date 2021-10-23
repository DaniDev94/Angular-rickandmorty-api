import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-gallery-page',
  templateUrl: './characters-gallery-page.component.html',
  styleUrls: ['./characters-gallery-page.component.scss']
})
export class CharactersGalleryPageComponent implements OnInit {

  @Input() characters: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
