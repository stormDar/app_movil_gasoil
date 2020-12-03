import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  insertForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.insertForm = this.formBuilder.group({
      matricula: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{2}$ || ^[0-9]{4}[a-zA-Z]{3}$"),
        Validators.maxLength(7),
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
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$")
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
