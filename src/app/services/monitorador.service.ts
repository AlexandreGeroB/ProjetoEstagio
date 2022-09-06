import { Monitorador } from './../classes/monitorador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoradorService {

  urlBase = "http://localhost:3000/listaMonitoradores"

  constructor(
    private http: HttpClient
  ) { }

  create(monitorador: Monitorador): Observable<Monitorador>{
    return this.http.post<Monitorador>(this.urlBase, monitorador)
  }

  get(): Observable<Monitorador[]>{
    return this.http.get<Monitorador[]>(this.urlBase)
  }

  getById(id: any): Observable<Monitorador> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Monitorador>(url)
  }

  put(monitorador: Monitorador): Observable<Monitorador>{
    const url = `${this.urlBase}/${monitorador.id}`
    return this.http.put<Monitorador>(url, monitorador)
  }
}
