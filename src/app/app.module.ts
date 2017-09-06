import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router'; // <-- NgRouter lives here

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},//redirect route
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent }
  ]) ], //contains a list of imports
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent ], //contains a list of application components, pipes, and directives that belong to a module.
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
