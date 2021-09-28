import { HeroDataService } from './../services/hero-data.service';
import { Hero } from './../model/hero';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 heroId: number ;
 hero: Hero;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: HeroDataService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.heroId = this.route.snapshot.params['id'];
    this.hero = this.dataService.getHeroById(this.heroId);

    this.route.params.subscribe(params => {
      console.log(params);
      // tslint:disable-next-line:no-string-literal
      this.heroId = parseInt(params['id'], 10 ) ;
      

      this.hero = this.dataService.getHeroById(this.heroId);
      console.log(this.hero);
    });
    }

}
