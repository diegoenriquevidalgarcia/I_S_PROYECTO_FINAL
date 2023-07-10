import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CursosComponent} from './cursos/cursos.component';
import {EstudiantesComponent} from './estudiantes/estudiantes.component';
import {MatriculasComponent} from './matriculas/matriculas.component';
import {VentasComponent} from './ventas/ventas.component';
import {DocentesComponent} from './docentes/docentes.component'; 

const routes: Routes = [
  {path:'cursos',component:CursosComponent},
  {path:'estudiantes',component:EstudiantesComponent},
  {path:'matriculas',component:MatriculasComponent},
  {path:'ventas',component:VentasComponent},
  {path:'docentes',component:DocentesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }