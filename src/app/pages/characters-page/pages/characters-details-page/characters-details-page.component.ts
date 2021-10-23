// import { LocationsService } from './../../../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from './../../../../shared/services/characters.service';

@Component({
  selector: 'app-characters-details-page',
  templateUrl: './characters-details-page.component.html',
  styleUrls: ['./characters-details-page.component.scss']
})
export class CharactersDetailsPageComponent implements OnInit {

  public characterData: any = {};

  constructor(private route: ActivatedRoute, private charactersService: CharactersService, /*private locationsService: LocationsService  */) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      // console.log(param) Muestra el id obtenido con ParamsAsMap
      let idCharacters = param.get('id');
      // console.log(idCharacters) Muestra el id(resultado limpio)
      this.charactersService.getCharactersId(idCharacters).subscribe((details) => {
        // console.log(details) Obtenemos el objeto con los personajes
        this.characterData = details;
      })
    })
  }

}
