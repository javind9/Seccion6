import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAOEO5hzuwtzUSIq-L-uIi0_9I7i6y_K22BtvJ5OwX0j3X4pzSpmgtkuRkJiT6ktGpscS4iRwFsGPVYyQo'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe( data => {
      console.log(data);
    })
   }
}
