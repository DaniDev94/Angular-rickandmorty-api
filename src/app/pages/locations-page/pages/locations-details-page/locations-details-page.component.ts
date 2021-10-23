import { ActivatedRoute } from '@angular/router';
import { LocationsService } from './../../../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-details-page',
  templateUrl: './locations-details-page.component.html',
  styleUrls: ['./locations-details-page.component.scss']
})
export class LocationsDetailsPageComponent implements OnInit {

  public locationDetail: any;
  public allResidents: any = [];

  constructor(private route: ActivatedRoute, private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      // console.log(param) --> Muestra el id obtenido con ParamsAsMap
      let idLocations = param.get('id');
      // console.log(idLocations) --> ID "limpio"

      this.locationsService.getLocationsId(idLocations).subscribe((data) => {
        // console.log(data) Muesta los detalles del personaje seleccionado
        this.locationDetail = data.name;
        const residents = data.residents;
        // console.log(residents) muestra por consola todos los residentes asociados a ese id
        residents.forEach((element: any) => {
          this.locationsService.getResidentsUrl(element).subscribe((dataResident) => {
            // console.log(element) Muestra las url de todos los residentes de esa localización
            // console.log(dataResident) Muestra los objeto que contienen la información de todos los residentes de esa localización
            this.allResidents.push(dataResident); //Tenenos que utiliza el metodo push para añadirlo a la variable, ya que obtenemos varios objetos y tenemos que recorrerlos con un ngFor
          })
        })
      })
    })

  }

}
