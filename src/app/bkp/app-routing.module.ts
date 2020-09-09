import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioContatoComponent } from '../formulario-contato/formulario-contato.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
