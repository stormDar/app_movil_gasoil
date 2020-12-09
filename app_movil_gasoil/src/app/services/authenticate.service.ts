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

  /*loginUser(credentials){
    fetch("localhost/aplicacion-tablet-gasoil/api/authentication.php?SenderID=${credentials.pin}")
    .then((res) => {

    })
    .catch((error) => {console.log(error)});
  }*/

}
