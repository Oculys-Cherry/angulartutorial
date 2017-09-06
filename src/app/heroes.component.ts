import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  template: `
  <h1>{{title}}</h1>

  <h2>My Heroes</h2>
  <ul class="heroes step" [class.show]="listReady">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero===selectedHero">
      <div class="badge">{{hero.id}}</div> {{hero.name}}
    </li>
  </ul>

  <hero-detail [hero]="selectedHero"></hero-detail>
  `,

  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
      font-family: Arial;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      text-align: center;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      width: 1em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }

    .show{
      opacity: 1 !important;
      }

    .step{
      opacity: 0;
      transition: .5s ease-in-out all;
      }
  `],

  providers: [HeroService] //defined HeroService as a provider for AppComponent
})

export class HeroesComponent implements OnInit { 
  title = 'DOTA Heroes';
  
  heroes: Hero[];
  listReady: Boolean = false;
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => 
      {
        this.heroes = heroes; 
        this.listReady = true;
      }
    );
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
