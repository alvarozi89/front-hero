import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/model/heroe.model';
import { ApiService } from 'src/app/servicios/api.service';



@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.component.html',
  styleUrls: ['./lista-heroes.component.css']
})
export class ListaHeroesComponent{
  public dataHeroes:any
  public filterText:any;

  constructor(    
    private heroeService:ApiService,
    private router:Router) {
   
  }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.heroeService.obtenerHeroes()
    .subscribe(res=>{
      this.dataHeroes=res.heroeResponse.heroe
      console.log(this.dataHeroes)
    })
  }

  search(searchForm:any){

    if(this.filterText==""){
      this.listar();
    }

    else {
      this.heroeService.listarPorParametro(searchForm.value.filtro)
      .subscribe(res=>{
        this.dataHeroes=res.heroeResponse.heroe
        console.log(this.dataHeroes)
      })

    
    }

  }

}




