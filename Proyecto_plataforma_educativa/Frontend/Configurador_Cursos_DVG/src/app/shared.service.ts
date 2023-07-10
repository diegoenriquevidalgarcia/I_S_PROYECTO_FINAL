import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://127.0.0.1:8000/Cursos_DVG/";
readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getCurList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'cursos/');
  }
  addCurso(val:any){
    return this.http.post(this.APIUrl+'cursos/',val);
  }
  updateCurso(val:any){
    return this.http.put(this.APIUrl+'cursos/',val);
  }
  deleteCurso(val:any){
    return this.http.delete(this.APIUrl+'cursos/'+val); 
  }


  getEstuList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'estudiantes/');
  }
  addEstudiante(val:any){
    return this.http.post(this.APIUrl+'estudiantes/',val);
  }
  updateEstudiante(val:any){
    return this.http.put(this.APIUrl+'estudiantes/',val);
  }
  deleteEstudiante(val:any){
    return this.http.delete(this.APIUrl+'estudiantes/'+val); 
  }



  getMatriList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'matriculas/');
  }
  addMatricula(val:any){
    return this.http.post(this.APIUrl+'matriculas/',val);
  }
  updateMatricula(val:any){
    return this.http.put(this.APIUrl+'matriculas/',val);
  }
  deleteMatricula(val:any){
    return this.http.delete(this.APIUrl+'matriculas/'+val);
  }


  getVenList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'ventas/');
  }
  addVenta(val:any){
    return this.http.post(this.APIUrl+'ventas/',val);
  }
  updateVenta(val:any){
    return this.http.put(this.APIUrl+'ventas/',val);
  }
  deleteVenta(val:any){
    return this.http.delete(this.APIUrl+'ventas/'+val); 
  }




  getDocenList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'docentes/');
  }
  addDocente(val:any){
    return this.http.post(this.APIUrl+'docentes/',val);
  }
  updateDocente(val:any){
    return this.http.put(this.APIUrl+'docentes/',val);
  }
  deleteDocente(val:any){
    return this.http.delete(this.APIUrl+'docentes/'+val); 
  }







  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/SaveFile',val);
  }

  getAllEstudianteNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'estudiantes/');
  }
}