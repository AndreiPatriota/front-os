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
    private client: HttpClient,
    private snackBar: MatSnackBar) { 
      this.baseUrl = enviroment.baseUrl
    }

  findAll(): Observable<Tecnico[]> {
    const url = this.baseUrl + '/tecnicos'
    return this.client.get<Tecnico[]>(url)
  }

  create(inTecnico: Tecnico): Observable<Tecnico> {
    const url = this.baseUrl + '/tecnicos'
    return this.client.post<Tecnico>(url, inTecnico)
  }

  message(inMessage: String) {
    this.snackBar.open(`${inMessage}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
