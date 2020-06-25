import { Component, OnInit } from '@angular/core';
import { ConeccionAutosService } from '../../services/coneccion-autos.service';
import { ModeloAuto } from '../../models/modelo-auto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  listaAutos: ModeloAuto[] = [];
  fg: FormGroup;
  tablaVisible: boolean = true;
  nombre: string = "";
  precio: number = 0;

  constructor(private autosServicio: ConeccionAutosService, private fb: FormBuilder) { 

  }

  ngOnInit() {

    this.autosServicio.get().subscribe((dato: ModeloAuto[]) =>{
    this.listaAutos = dato

    });
  }

  crearFormulario(auto: ModeloAuto){
    this.tablaVisible = false;
    this.fg = this.fb.group({
    IdAuto: [auto.IdAuto],
    NombreAuto: ['',[Validators.required,Validators.minLength(5)]],
    PrecioAuto: [Number,[Validators.required,Validators.minLength(1)]]
    });
    this.nombre = auto.NombreAuto;
    this.precio = auto.PrecioAuto;


  }
  cancelar(){
    this.tablaVisible = true;
  }

  guardar(){
    if(this.fg.valid){
    const objeto = {...this.fg.value};
    this.autosServicio.put(objeto).subscribe((res: any) =>{
      window.alert('carga exitosa');
      this.tablaVisible = true;
    });
    }
    else{
      window.alert('datos mal ingresados');
    }

  }


}