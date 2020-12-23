import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  searchManga(query: string) {
    const url = `https://api.jikan.moe/v3/search/manga?q=${query}`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getManga(id: string) {
    const url = `https://api.jikan.moe/v3/manga/${id}`;
    let obsTracks = this.http.get(url);
    console.log(url);
    console.log(obsTracks);
    return obsTracks;
  }

  searchAnime(query: string) {
    const url = `https://api.jikan.moe/v3/search/anime?q=${query}`;
    let obsTracks = this.http.get(url);
    console.log(obsTracks);
    return obsTracks;
  }

  getAnime(id: string) {
    const url = `https://api.jikan.moe/v3/anime/${id}`;
    let obsTracks = this.http.get(url);
    console.log(url);
    console.log(obsTracks);
    return obsTracks;
  }

}
