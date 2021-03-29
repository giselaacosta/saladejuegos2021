import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor(public authService: AuthserviceService) { }

  ngOnInit(): void {
  }

}
