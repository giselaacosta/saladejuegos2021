import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { QuiensoyComponent } from '../app/components/quiensoy/quiensoy.component';
import { RegistroComponent } from '../app/components/registro/registro.component';
import { ErrorComponent } from '../app/components/error/error.component';
import { JuegosComponent } from '../app/components/juegos/juegos.component';
import { MemotestComponent } from '../app/components/memotest/memotest.component';
import { PiedrapapeltijeraComponent } from '../app/components/piedrapapeltijera/piedrapapeltijera.component';
import { TetrisComponent } from '../app/components/tetris/tetris.component';
import { TatetiComponent } from '../app/components/tateti/tateti.component';

import { RouterModule, Routes } from '@angular/router'


const appRoutes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
{ path: "login", component: LoginComponent, pathMatch: "full" },
{ path: "home", component: HomeComponent, pathMatch: "full" },
{ path: "quiensoy", component: QuiensoyComponent, pathMatch: "full" },
{ path: "registro", component: RegistroComponent, pathMatch: "full" },
{ path: "error", component: ErrorComponent, pathMatch: "full" },
{ path: "juegos", component: JuegosComponent, pathMatch: "full" },
{ path: "memotest", component: MemotestComponent, pathMatch: "full" },
{ path: "piedrapapeltijera", component: PiedrapapeltijeraComponent, pathMatch: "full" },
{ path: "tetris", component: TetrisComponent, pathMatch: "full" },
{ path: "tateti", component: TatetiComponent, pathMatch: "full" }


];
export const routing = RouterModule.forRoot(appRoutes);