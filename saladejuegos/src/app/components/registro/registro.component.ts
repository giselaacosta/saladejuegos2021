import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

  title = '"Registro de nuevo usuario "';

  emailAddress: string;
  password: string;

  constructor(public authService: AuthserviceService) { }

  signup() {
    this.authService.signup(this.emailAddress, this.password);
    this.emailAddress = this.password = '';
  }



    logout() {
    console.log('User is successfully logged out.')
     this.authService.logout();
   }
}
