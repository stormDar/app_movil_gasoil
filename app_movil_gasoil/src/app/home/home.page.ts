import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  insertForm: FormGroup;
  validation_message = {
    matricula: [
      { type: "required", message: "La matrícula es requerida" },
      { type: "pattern", message: "Matrícula introducida incorrecta!"},
      { type: "maxLength", message: "Matrícula introducida fuera de formato!"}
    ],
    cantidad: [
      { type: "required", message: "La cantidad es requerida" },
      { type: "pattern", message: "Cantidad introducida invalida!"}
    ],
    kilometraje: [
      { type: "required", message: "El kilometraje del vehiculo es requerido" },
      { type: "pattern", message: "Kilometraje introducido invalido!"}
    ],
    empresa: [
      { type: "required", message: "La empresa es requerida" }
    ],
    obra: [
      { type: "required", message: "La obra es requerida" },
      { type: "pattern", message: "Obra introducida incorrecta!"}
    ]
  };

  constructor(private formBuilder: FormBuilder) {
    this.insertForm = this.formBuilder.group({
      matricula: new FormControl("", Validators.compose([
        Validators.required,
        /*Validators.pattern("^[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]+[a-zA-Z]+[a-zA-Z]$ || ^[0-9]+[0-9]+[0-9]+[0-9]+[a-zA-Z]+$"),*/
        Validators.pattern("(^[0-9]+[0-9]+[0-9]+[0-9]+[a-zA-Z]+[a-zA-Z]+[a-zA-Z]$) || (^[a-zA-Z]+[0-9]+[0-9]+[0-9]+[0-9]+[a-zA-Z]+[a-zA-Z]$)"),
        Validators.minLength(7),
        Validators.maxLength(7)
      ])
      ),
      cantidad: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ])
      ),
      kilometraje: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ])
      ),
      empresa: new FormControl("", Validators.compose([
        Validators.required
        /*Validators.pattern("^[a-zA-Z]+$")*/
      ])
      ),
      obra: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]+$")
      ])
      ),
      notas: new FormControl("")
    })
  }
  
  ngOnInit() {
  }

  insertReg(datos){
    console.log(datos);
  }


}
