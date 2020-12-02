import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
    console.log(credentials)
  }

}

