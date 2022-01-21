
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarHeroeComponent } from './components/buscar-heroe/buscar-heroe.component';

const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent  },
    { path: 'heroes', component: HeroesComponent  },
    { path: 'heroe/:id', component: HeroeComponent  },
    { path: 'buscar-heroe/:termino', component: BuscarHeroeComponent  },
    
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({

    // useHash: true /#/
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
