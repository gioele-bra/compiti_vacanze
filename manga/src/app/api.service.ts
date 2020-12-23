import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  search(query: string) {
    const url = `https://api.jikan.moe/v3/search/manga?q=${query}`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  get(name: string) {
    const url = `https://api.jikan.moe/v3/manga/${name}`;
    let obsTracks = this.http.get(url);
    console.log(url);
    console.log(obsTracks);
    return obsTracks;
  }

}
