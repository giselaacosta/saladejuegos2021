import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.css']
})
export class QuiensoyComponent implements OnInit {

  constructor(public authService: AuthserviceService) { }
  ngOnInit(): void {
  }
  atras() {
     this.authService.atras();
   }
}
