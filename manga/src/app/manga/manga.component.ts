import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  routeObs: Observable<ParamMap>;
  apiServiceObs: Observable<Object>;
  manga : any;

  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private location: Location ) { }


  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }
  getRouterParam = (params: ParamMap) =>
  {
    let id = params.get('id');
    console.log (id);
    this.apiServiceObs = this.service.getManga(id);
    this.apiServiceObs.subscribe((data)=>this.manga = data)
  }

    back() : void
    {
        this.location.back();
    }
  }
