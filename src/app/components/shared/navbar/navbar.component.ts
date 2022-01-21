import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  heroes: any[] = [];

  constructor( private _heroesService: HeroesService, private router: Router  ) { }

  ngOnInit(): void {
  }

  

  buscarHeroe( textoBuscar: string ) {
    console.log( textoBuscar );

    this.router.navigate(['buscar-heroe', textoBuscar ])
    // return this.heroes = this._heroesService.getBuscarHeroe(textoBuscar);
    
  }
 

}
