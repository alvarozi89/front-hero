import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Heroe } from 'src/app/model/heroe.model';
import { Carro } from 'src/app/model/carro.model';
import { ApiService } from 'src/app/servicios/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-crear-heroe',
  templateUrl: './crear-heroe.component.html',
  styleUrls: ['./crear-heroe.component.css']
})
export class CrearHeroeComponent {
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
  }

  llamarCarros(){
    this.apiservice.getCarros()
    .subscribe(response=>{
    this.carro = response
    console.log(this.carro)})

  }

  crearHeroe(){
    if (this.heroeModel.nombre==null) {

      Swal.fire(
        '!El campo nombre es obligatorio!',
        'Aceptar',
        'error'
       )
      
    }

    else if (this.heroeModel.condicion==null) {

      Swal.fire(
        '!El campo condición es obligatorio!',
        'Aceptar',
        'error'
       )
      
    }

    else if (this.heroeModel.grupo==null) {

      Swal.fire(
        '!El campo grupo es obligatorio!',
        'Aceptar',
        'error'
       )
      
    }

    else if (this.heroeModel.lugarOperacion==null) {

      Swal.fire(
        '!El campo lugar de operación es obligatorio!',
        'Aceptar',
        'error'
       )
      
    }

    else if (this.heroeModel.tipoPoder==null) {

      Swal.fire(
        '!El campo tipo de poder es obligatorio!',
        'Aceptar',
        'error'
       )
      
    }

    else if (this.heroeModel.carro==null) {

      Swal.fire(
        '!El campo carro es obligatorio!',
        'Aceptar',
        'error'
       )
      
    }

    else {
    this.apiservice.createHeroe(this.heroeModel)
    .subscribe(response => {
      console.log("Exito")
      Swal.fire(
        '!Heroe Creado!',
        'Aceptar',
        'success'
       )
       setTimeout(() => {
        this.router.navigate(['listar-heroes'])
      }, 2000);
    })
    console.log(this.heroeModel)
  }
  }

 
  cerrarAlerta(){
    this.mensaje_error=""
  }

}
