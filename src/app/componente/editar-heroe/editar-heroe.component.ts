import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Heroe } from 'src/app/model/heroe.model';
import { Carro } from 'src/app/model/carro.model';
import { ApiService } from 'src/app/servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-heroe',
  templateUrl: './editar-heroe.component.html',
  styleUrls: ['./editar-heroe.component.css']
})
export class EditarHeroeComponent {
  id !: any;
  public dataHeroes:any
  public dataTransporte:any
  formValue!: FormGroup;
  formValueExtra!: FormGroup;
  heroeModel:Heroe= new Heroe();
  carro: Carro[]=[];
  public mensaje_ok:any;
  public mensaje_error:any;
  constructor(
    private formBuilder:FormBuilder,
    private apiservice:ApiService,
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.llamarCarros();
   this.obtenerHeroe();
  }

  llamarCarros(){
    this.apiservice.getCarros()
    .subscribe(response=>{
    this.carro = response
    console.log(this.carro)})
  }

  obtenerHeroe(){

    this.activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.apiservice.obtenerHeroe(this.id).subscribe(
        response=>{
          this.dataHeroes= response.heroeResponse.heroe
          console.log(this.dataHeroes)
          this.heroeModel.condicion = this.dataHeroes[0].condicion;
          this.heroeModel.grupo = this.dataHeroes[0].grupo;
          this.heroeModel.lugarOperacion = this.dataHeroes[0].lugarOperacion;
          this.heroeModel.nombre = this.dataHeroes[0].nombre;
          this.heroeModel.tipoPoder = this.dataHeroes[0].tipoPoder;
          this.heroeModel.id = this.dataHeroes[0].id;
          this.heroeModel.carro = this.dataHeroes[0].carro
        }
      
      )
    })
  }

  crearHeroe(){
    this.apiservice.createHeroe(this.heroeModel)
    .subscribe(response => {
      console.log("Exito")
      Swal.fire(
        '!Heroe actualizado!',
        'Aceptar',
        'success'
       )
       setTimeout(() => {
        this.router.navigate(['listar-heroes'])
      }, 2000);
   
    })
    console.log(this.heroeModel)
  }

  
  cerrarAlerta(){
    this.mensaje_error=""
  }
}
