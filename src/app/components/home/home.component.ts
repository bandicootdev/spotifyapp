import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string;

  constructor(private spotifyService: SpotifyService) {
    this.error = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.error = true;
      this.messageError = error.error.error.message;
    });
  }

}
