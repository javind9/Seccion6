import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getQuery( query: string){

    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA_MsVau5Stu2hruiAgjOeHpBAqTVaDCHkjitQf7e7tbKD2DEZGoGA4ZcMV1ZCmyZ-VyQeHLipuAs__SkI'
    });

    return this.http.get(url, {headers});
   }

   getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items));
   }

   getArtistas(termino: string){

    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`)
    .pipe( map( data => data['artists'].items));
   }

   getArtista(id: string){

    return this.getQuery(`artists/${id}`)
    //.pipe( map( data => data['artists'].items));
   }
}
