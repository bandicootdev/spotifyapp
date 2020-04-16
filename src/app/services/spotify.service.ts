import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  token: {};

  constructor(private httpClient: HttpClient) {
  }


   getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: `Bearer BQBHJCPoVRccxbtEThgsuzTbXJ7Jpt61nkx2t-85DiOfAdvLmB0_gJtPrHwhHFkYxlrKO5PDluvVyb3oHyU`
    });
    const url = `https://api.spotify.com/v1/${query}`;

    return this.httpClient.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=30`)
      .pipe(map((data: any) => data.artists.items));
  }

  getAstista(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map((data: any) => data.artists.items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data.tracks));
  }

  getToken() {
    const url = 'https://spotify-get-token.herokuapp.com/spotify/d6b55734aa3f4b49af89ae8023b6c69e/4659ca881ead4eed81c45197f071db34';
    this.token = this.httpClient.get(url).subscribe(token => {
      this.token = token;
    });
  }

}
