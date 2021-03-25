import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent  {
  title = '"Error "';


  emailAddress: string;
  password: string;

  constructor(public authService: AuthserviceService) { }

  salir() {
    console.log('Error en logueo o registro.')
     this.authService.salir();
   }

}