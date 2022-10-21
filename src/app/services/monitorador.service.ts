import { Monitorador } from './../classes/monitorador';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enderecos } from '../classes/enderecos';

@Injectable({
  providedIn: 'root'
})
export class MonitoradorService {


  urlMonitorador = "api/monitorador";
  urlEnderecos = "api/enderecos"


  constructor(
    private http: HttpClient
  ) { }

  createMonitorador(monitorador: Monitorador){
    return this.http.post<Monitorador>(this.urlMonitorador, monitorador)
  }

  get(): Observable<Monitorador[]>{
    return this.http.get<Monitorador[]>(this.urlMonitorador)
  }

  getByIdMonitorador(id: any): Observable<Monitorador> {
    const url = `${this.urlMonitorador}/${id}`
    return this.http.get<Monitorador>(url)
  }

  putMonitorador(monitorador: Monitorador): Observable<Monitorador>{
    return this.http.put<Monitorador>(this.urlMonitorador, monitorador)
  }

  deleteMonitorador(id: number){
    return this.http.delete<Monitorador>(`${this.urlMonitorador}/${id}`);
  }

  createEnderecos(enderecos:Enderecos[]){
    return this.http.post<Enderecos>(this.urlEnderecos, enderecos)
  }

  getByIdEnderecos(id: any): Observable<Enderecos> {
    const url = `${this.urlEnderecos}/${id}`
    return this.http.get<Enderecos>(url)
  }

  putEnderecos(enderecos: Enderecos): Observable<Enderecos>{
    return this.http.post<Enderecos>(this.urlEnderecos, enderecos)
  }

  deleteEnderecos(id: number){
    return this.http.delete<Enderecos>(`${this.urlEnderecos}/${id}`);
  }
}
