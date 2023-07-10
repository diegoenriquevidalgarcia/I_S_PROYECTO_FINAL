import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { ShowCurComponent } from './cursos/show-cur/show-cur.component';
import { AddEditCurComponent } from './cursos/add-edit-cur/add-edit-cur.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ShowEstuComponent } from './estudiantes/show-estu/show-estu.component';
import { AddEditEstuComponent } from './estudiantes/add-edit-estu/add-edit-estu.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { ShowMatriComponent } from './matriculas/show-matri/show-matri.component';
import { AddEditMatriComponent } from './matriculas/add-edit-matri/add-edit-matri.component';
import { VentasComponent } from './ventas/ventas.component';
import { ShowVenComponent } from './ventas/show-ven/show-ven.component';
import { AddEditVenComponent } from './ventas/add-edit-ven/add-edit-ven.component';
import { DocentesComponent } from './docentes/docentes.component';
import { ShowDocenComponent } from './docentes/show-docen/show-docen.component';
import { AddEditDocenComponent } from './docentes/add-edit-docen/add-edit-docen.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ShowCurComponent,
    AddEditCurComponent,
    EstudiantesComponent,
    ShowEstuComponent,
    AddEditEstuComponent,
    MatriculasComponent,
    ShowMatriComponent,
    AddEditMatriComponent,
    VentasComponent,
    ShowVenComponent,
    AddEditVenComponent,
    DocentesComponent,
    ShowDocenComponent,
    AddEditDocenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
