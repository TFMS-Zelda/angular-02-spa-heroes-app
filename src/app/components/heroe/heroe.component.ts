import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _heroeService: HeroesService ) 
  {
    // console.log(this.heroe = this._heroeService.getHeroe(2))
    this.activatedRoute.params.subscribe( (params) => {
      
      // console.log(params['id']);
      this.heroe = this._heroeService.getHeroe( params['id'] )
      console.log( this.heroe );
      
    })

  }
}
