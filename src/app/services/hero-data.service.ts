import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroDataService {
  public heroes = [
    new Hero('Batman', 111, '../assets/batman.jpg', ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'),
    new Hero('Superman', 112, '../assets/superman.jpg', ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'),
    new Hero('Aquaman', 113, '../assets/aquaman.jpg', ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'),
    new Hero('Captain Aamerica', 114, '../assets/batman.jpg', ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'),
    new Hero('Wonderwoman', 115, '../assets/batman.jpg', ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.'),
    new Hero('Mocambo', 116, '../assets/superman.jpg', ' The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.')
  ];

  public searchResult: Hero []  = [];
  constructor(private http: HttpClient) { }

  getAllHeroes(): Hero[] {
    return(this.heroes);
  }

  getHeroById(id: number): Hero {
    let i = 0 ;
    for (i = 0 ; i < this.heroes.length ; i++ ) {
      if ( this.heroes[i].id === id ) {
        console.log(this.heroes[i]);
        return(this.heroes[i]);
      }
    }
    return(this.heroes[i]);
  }

  searchHeroes(term: string): Observable<any> {
    this.searchResult = [] ;
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of();
    }
    let i = 0 ;
    // tslint:disable-next-line:no-unused-expression
    for (i = 0 ; i < this.heroes.length ; i++ ) {
        if ( this.heroes[i].heroName.includes(term) ) {
          this.searchResult.push(this.heroes[i]) ;
        }
    }
    return of(this.searchResult);
  }
}
