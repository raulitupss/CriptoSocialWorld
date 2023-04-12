import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SeguidosComponent } from './components/seguidos/seguidos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mensajes', component: MensajesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'seguidos', component: SeguidosComponent },
  { path: 'registrarse', component: RegistroComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
