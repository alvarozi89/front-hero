import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';
import { Heroe } from '../model/heroe.model';
import { Carro } from '../model/carro.model';
const base_url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(  private _htpp:HttpClient,) { }

  obtenerHeroes(){
    return this._htpp.get<any>(base_url+'listar/heroes')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  obtenerHeroe2(id:number):Observable<Heroe>{
    return this._htpp.get<Heroe>(base_url+'listar/heroes/'+id);
  }

  obtenerHeroe(id:number){
    return this._htpp.get<any>(base_url+'listar/heroes/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  createHeroe(heroe: Heroe):Observable<Heroe>{
    return this._htpp.post<Heroe>(base_url+'crear/heroe',heroe)
  }

  getCarros():Observable<Carro[]>{
    return this._htpp.get<Carro[]>(base_url+'carros')

  }

  listarPorParametro(params:any){
    return this._htpp.get<any>(base_url+'listar/heroes/nombre/'+params)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  listarPorParametroLugar(params:any){
    return this._htpp.get<any>(base_url+'listar/heroes/lugar/'+params)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}



