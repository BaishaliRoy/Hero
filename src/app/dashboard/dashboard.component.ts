import { HeroDataService } from './../services/hero-data.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  topHeroes: Hero[] ;
  constructor(private dataService: HeroDataService) { }

  ngOnInit(): void {
    this.topHeroes = this.dataService.getAllHeroes().slice(0, 4);
  }

}
