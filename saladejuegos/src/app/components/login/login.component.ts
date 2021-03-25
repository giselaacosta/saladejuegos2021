import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = '"Login"';

  emailAddress: string;
  password: string;

  constructor(public authService: AuthserviceService) { }

 

  login() {
    this.authService.login(this.emailAddress, this.password);
    this.emailAddress = this.password = '';    
  }

  autocompletar() {
    this.emailAddress='gise55@gmail.com';
    this.password='12345678';
    this.authService.login(this.emailAddress, this.password);
    this.emailAddress = this.password = '';    
  }
    logout() {
    console.log('User is successfully logged out.')
     this.authService.logout();
   }
}