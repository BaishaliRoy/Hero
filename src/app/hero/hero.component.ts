import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroDataService } from '../services/hero-data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[] ;
  heroList: Hero[] ;
  totalItem: number ;
  pageSize  = 5 ;
  currentPage =  1;
  totalPages: number;
  startIndex = 0 ;
  endIndex = 0 ;
  prevButnActive = true;
  nextButnActive = true;
  constructor(private dataService: HeroDataService,
              private router: Router) { }

  ngOnInit(): void {
   this.heroes =  this.dataService.getAllHeroes();
   this.heroList = this.heroes.slice(this.startIndex, this.pageSize);
   this.totalItem = this.heroes.length ;
   this.totalPages = Math.ceil(this.totalItem / this.pageSize);
  }

  goToPreviousPage(): void {
    --this.currentPage ;
    if (this.currentPage <= 1) {
      this.currentPage = 1;
      this.prevButnActive = !this.prevButnActive;
    }
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalItem - 1);
    this.heroList = this.heroes.slice(this.startIndex, this.endIndex + 1);
    this.router.navigate(['/hero']);

  }
  goToNextPage(): void {
    ++this.currentPage ;
    if (this.currentPage >= this.totalPages) {
      this.currentPage = this.totalPages ;
      this.nextButnActive = !this.nextButnActive ;
    }
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min(this.startIndex + this.pageSize - 1, this.totalItem - 1);
    this.heroList = this.heroes.slice(this.startIndex, this.endIndex + 1);
    this.router.navigate(['/hero']);
  }

}
