import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { InterfaceHeroes } from '../../interfaces/InterfaceHeroes';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroes:InterfaceHeroes[] = [];

  constructor( private _heroesService: HeroesService, private router: Router ) { }

  ngOnInit(): void {

    this.heroes = this._heroesService.getHeroes();

  }

  verHeroe( idHeroe: number ){
    // console.log(idHeroe);

    // redireccionar a una pagina 
    this.router.navigate(['/heroe', idHeroe])
  }


}
