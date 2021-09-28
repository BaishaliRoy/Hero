import { HeroDataService } from './../services/hero-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable, ObservableInput, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap  } from 'rxjs/operators';
import { Hero } from '../model/hero';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  private searchSubject = new Subject<string>();
  heroes$: Observable<Hero []>;
  listDisplay = '';

  constructor(private dataService: HeroDataService) { }

  search(searchString: string): void {
    // console.log(searchString);
    this.searchSubject.next(searchString) ;
  }


  ngOnInit(): void{
    this.heroes$ = this.searchSubject.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.dataService.searchHeroes(term))

    );
  }

  removeList(): void{
    this.listDisplay =  'search-display' ;
  }

  showList(): void{
    this.listDisplay =  '' ;
    
  }
}
