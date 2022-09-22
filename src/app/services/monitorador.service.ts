import { Monitorador } from './../classes/monitorador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoradorService {


  urlBase = "api/monitorador"

  constructor(
    private http: HttpClient
  ) { }

  createMonitorador(monitorador: Monitorador){
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
    return this.http.post<Monitorador>(this.urlBase, monitorador)
  }

  deleteMonitorador(id: number){
    return this.http.delete<Monitorador>(`${this.urlBase}/${id}`);
  }
}
