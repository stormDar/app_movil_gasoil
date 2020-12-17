import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credentials){
    return new Promise((accept, reject)=>{
      if(credentials.pin=="12345"){
        accept("Login correcto");
      } else {
        reject("Login incorrecto");
      }
    })
  }


  //const url = 'http://localhost/aplicacion-tablet-gasoil/api/authentication.php?SenderID=';

  /*loginUser(credentials){
    fetch(url + ${credentials.pin})
    .then(res => res.json()) 
    .then(res.json() => {
     
      console.log(res.json());

      /*if(res.json() == 1){
        accept("Login correcto");
      } else {
        reject("Login incorrecto");
      }*/

    /*})   
    .catch((error) => {console.log(error)});
  }*/

  /*loginUser(credentials) {

    return fetch(this.url + credentials.pin)
    .then(response => response.json()
    .then(
      
    )
    );

    return new Promise((accept, reject) => {
      if (
        credentials.pin === '12345'
      ){
        accept('Login Correcto');
      } else {
        reject('Login Incorrecto');
      }
    });
  }*/



}
