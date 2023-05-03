import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaHeroesComponent } from './componente/lista-heroes/lista-heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { MatNativeDateModule} from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MaterialExampleModule} from '../material.module';
import { CrearHeroeComponent } from './componente/crear-heroe/crear-heroe.component';
import { EditarHeroeComponent } from './componente/editar-heroe/editar-heroe.component';
import { ListarCarrosComponent } from './componente/listar-carros/listar-carros.component';
import { InicioComponent } from './componente/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ListaHeroesComponent,
    CrearHeroeComponent,
    EditarHeroeComponent,
    ListarCarrosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MaterialExampleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
