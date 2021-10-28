import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/service/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

    heroes: Heroe[] = [];

  constructor( 
    private _heroesService: HeroesService,
    private router: Router ) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();

  }
  seeHeroe(index: number){
    this.router.navigate( ['/heroe', index] )
  }
}
