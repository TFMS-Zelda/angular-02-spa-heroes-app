import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfaceHeroes } from '../../interfaces/InterfaceHeroes';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
})
export class BuscarHeroeComponent implements OnInit {

  heroesBuscados: InterfaceHeroes[] = [];
  termino: string = '';
 

  constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService ) { 

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(  (params) => {
        
        // console.log( 'ngOnInit Buscar Heroe Iniciado' , params['termino'] )
        this.termino = params['termino']

        this.heroesBuscados = this._heroesService.getBuscarHeroe( this.termino )
        // console.log( this.heroesBuscados.length );

        
    })

  }

}
