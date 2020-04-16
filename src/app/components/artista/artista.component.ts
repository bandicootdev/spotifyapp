import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  topTracks: any = {};
  loadingArtist: boolean;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
  }

  ngOnInit(): void {
    this.loadingArtist = true;
    this.route.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotifyService.getAstista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(traks => {
      this.topTracks = traks;
      console.log(this.topTracks);
    });
  }
}
