import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../app/components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { QuiensoyComponent } from '../app/components/quiensoy/quiensoy.component';
import { RegistroComponent } from '../app/components/registro/registro.component';
import { ErrorComponent } from '../app/components/error/error.component';

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
{ path: "error", component: ErrorComponent, pathMatch: "full" }


];
export const routing = RouterModule.forRoot(appRoutes);