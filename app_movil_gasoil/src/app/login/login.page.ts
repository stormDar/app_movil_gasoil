import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;
  validation_message = {
    pin: [
      { type: "required", message: "El código es requerido" }
      /*{ type: "pattern", message: "Código introducido incorrecto!"}*/
    ]
  };

  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController, private authService: AuthenticateService, private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      pin: new FormControl ("", Validators.compose([
        Validators.required,
        Validators.pattern("[0-9]+[0-9]+[0-9]+[0-9]")
      ])
      )
    });
  }
  
  ngOnInit() {
  }

  loginUser(credentials){
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage = "";
      this.storage.set('isUserLoggedIn', true);
      this.navCtrl.navigateForward("/home");
    }).catch(err=>{
      this.errorMessage = err;
    });
  }

}

