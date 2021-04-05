import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import { JugadaService } from '../../services/jugada.service';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {
  result: string;
  pointsUser = 0;
  pointsComp =  0;
  constructor(public authService: AuthserviceService,private playGame: JugadaService) { }

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);

  }
  atras() {
    this.authService.atras();
  }
  play(choice: string): void {
    const result = this.playGame.game(choice);
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
  }
}
