import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { QuiensoyComponent } from './components/quiensoy/quiensoy.component';
import { routing  } from './app-routing.module';
// Angular firebase module changes.
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthserviceService } from '../app/services/authservice.service';
import { ErrorComponent } from './components/error/error.component';
import { RegistroComponent } from './components/registro/registro.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JuegosComponent } from './components/juegos/juegos.component';
import { MemotestComponent } from './components/memotest/memotest.component';
import { PiedrapapeltijeraComponent } from './components/piedrapapeltijera/piedrapapeltijera.component';
import { TatetiComponent } from './components/tateti/tateti.component';
import { TetrisComponent } from './components/tetris/tetris.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuiensoyComponent,
    ErrorComponent,
    RegistroComponent,
    JuegosComponent,
    MemotestComponent,
    PiedrapapeltijeraComponent,
 
    TatetiComponent,
    TetrisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    routing ,
    MatButtonModule,
    MatToolbarModule
    
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
