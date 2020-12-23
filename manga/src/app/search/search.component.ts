import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string;
  obsTrack: Observable<Object>;
  results: any;
  manga = true;

  constructor(public api: ApiService) {
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    if(this.manga){ this.obsTrack = this.api.searchManga(this.query); } else { this.obsTrack = this.api.searchAnime(this.query); }
    this.obsTrack.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.products && res.products) {
      this.results = res.products;
    }
  }

  switch(){
    if(this.manga){ this.manga = false } else { this.manga = true };
  }

}
