import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHeroesComponent } from './componente/lista-heroes/lista-heroes.component';
import { CrearHeroeComponent } from './componente/crear-heroe/crear-heroe.component';
import { EditarHeroeComponent } from './componente/editar-heroe/editar-heroe.component';
import { ListarCarrosComponent } from './componente/listar-carros/listar-carros.component';
import { InicioComponent } from './componente/inicio/inicio.component';

const routes: Routes = [
  {path: '',component: InicioComponent},
  {path: 'listar-heroes', component: ListaHeroesComponent },
  {path: 'listar-carros', component: ListarCarrosComponent },
  {path: 'crear-heroe', component: CrearHeroeComponent },
  {path: 'editar-heroe/:id',component: EditarHeroeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
