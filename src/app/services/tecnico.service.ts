import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Tecnico } from '../models/tecnico';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  baseUrl: String 

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar) { 
      this.baseUrl = enviroment.baseUrl
    }

  findAll(): Observable<Tecnico[]> {
    const url = `${this.baseUrl}/tecnicos`
    return this.http.get<Tecnico[]>(url)
  }

  findById(inId: number): Observable<Tecnico> {
    const url = `${this.baseUrl}/tecnicos/${inId}`
    return this.http.get<Tecnico>(url)
  }

  create(inTecnico: Tecnico): Observable<Tecnico> {
    const url = `${this.baseUrl}/tecnicos`
    return this.http.post<Tecnico>(url, inTecnico)
  }

  update(inTecnico: Tecnico): Observable<Tecnico> {
    const url = `${this.baseUrl}/tecnicos/${inTecnico.id}`
    return this.http.put<Tecnico>(url, inTecnico)
  }

  delete(inTecnico: Tecnico): Observable<Tecnico>{
    const url = `${this.baseUrl}/tecnicos/${inTecnico.id}`
    return this.http.delete<Tecnico>(url)
  }

  message(inMessage: String) {
    this.snackBar.open(`${inMessage}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
