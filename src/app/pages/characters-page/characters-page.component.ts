import { Component, OnInit } from '@angular/core';
import { CharactersService } from './../../shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  public charactersList: any = [];
  public charactersNext: any = {};

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((character) =>{
      this.charactersList = character.results;
      this.charactersNext = character.info;
      console.log(this.charactersList);
      console.log(this.charactersNext);
    })
  }

}
