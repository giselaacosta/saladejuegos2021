import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = '"Pagina Principal "';

  emailAddress: string;
  password: string;

  constructor(public authService: AuthserviceService) { }


    logout() {
    console.log('User is successfully logged out.')
     this.authService.logout();
   }


}
