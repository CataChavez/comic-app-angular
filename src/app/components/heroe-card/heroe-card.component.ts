import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: any;

  constructor(
    private router: Router 
    
  ) { }

  
  ngOnInit(): void {
  }
  
  seeHeroe(index: number){
    this.router.navigate( ['/heroe', index] )
  }
}
