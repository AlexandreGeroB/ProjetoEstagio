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

  createMonitorador(monitorador: Monitorador): Observable<Monitorador>{
    return this.http.post<Monitorador>(this.urlBase, monitorador)
  }

  get(): Observable<Monitorador[]>{
    return this.http.get<Monitorador[]>(this.urlBase)
  }

  getByIdMonitorador(id: any): Observable<Monitorador> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Monitorador>(url)
  }

  putMonitorador(monitorador: Monitorador): Observable<Monitorador>{
    const url = `${this.urlBase}/${monitorador.id}`
    return this.http.put<Monitorador>(url, monitorador)
  }

  deleteMonitorador(id: number){
    return this.http.delete<Monitorador>(`${this.urlBase}/${id}`);
  }
}
