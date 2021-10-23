import { EpisodesService } from './../../shared/services/episodes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.scss']
})
export class EpisodesPageComponent implements OnInit {

  public episodesList: any = [];

  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {
    this.episodesService.getEpisodes().subscribe((episode) =>{
      // console.log(episode.results) Muestra los 20 primeros episodios
      this.episodesList = episode.results
    })
  }
}
