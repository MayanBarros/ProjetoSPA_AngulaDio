import { EducacaoComponent } from './views/educacao/educacao.component';
import { CertificadosComponent } from './views/certificados/certificados.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "certificados",
  component: CertificadosComponent
},
{
  path: "educacao",
  component: EducacaoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
