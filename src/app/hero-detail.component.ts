import { Component, OnInit } from '@angular/core';
//take id parameter from paramMap observable in the ActivatedRoute
// service and use the HeroService to fetch hero with the id
import { ActivatedRoute, ParamMap } from '@angular/router'; 
import { Location } from '@angular/common';
import { HeroService } from './hero.service';

import { Hero } from './hero';

//something I don't quite understand
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',

    templateUrl: './hero-detail.component.html',

    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero : Hero;

    constructor(
        private heroService : HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        //if a user renavigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again
        // (+) converts string 'id' to a number
        this.route.paramMap
        .switchMap( (params: ParamMap) => 
            this.heroService.getHero(+params.get('id')))
        .subscribe((hero : Hero) => {
            this.hero = hero;
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    /*Difference between observables and promises:
    Observables
    -handle multiple values over time
    -cancellable

    Promises
    -only called once and will return a single value
    -not cancellable
*/
}