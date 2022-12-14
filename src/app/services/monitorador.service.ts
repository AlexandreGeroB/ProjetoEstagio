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

  createMonitorador(monitorador: Monitorador, enderecos: Enderecos[]){
    return this.http.post<Monitorador>(this.urlMonitorador, monitorador);
    return this.http.post<Enderecos[]>(this.urlMonitorador, enderecos)
  }

  get(): Observable<Monitorador[]>{
    return this.http.get<Monitorador[]>(this.urlMonitorador)
  }

  getEnd(): Observable<Enderecos[]>{
    return this.http.get<Enderecos[]>(this.urlMonitorador)
  }

  getByIdMonitorador(id: any): Observable<Monitorador> {
    const url = `${this.urlMonitorador}/${id}`
    return this.http.get<Monitorador>(url)
  }

  // putMonitorador(monitorador: Monitorador, enderecos: Enderecos[]): Observable<any>{
  //   return this.http.put<Monitorador>(this.urlMonitorador, monitorador);
  //   return this.http.put<Enderecos[]>(this.urlMonitorador, enderecos);
  // }

  putEnderecos(enderecos: Enderecos[]): Observable<Enderecos[]>{
    return this.http.put<Enderecos[]>(this.urlMonitorador, enderecos);
  }

  deleteMonitorador(id: number){
    return this.http.delete<Monitorador>(`${this.urlMonitorador}/${id}`);
  }

  createEnderecos(enderecos:Enderecos[]){
    return this.http.post<Enderecos>(this.urlMonitorador, enderecos)
  }

  getByIdEnderecos(id: any): Observable<Enderecos> {
    const url = `${this.urlEnderecos}/${id}`
    return this.http.get<Enderecos>(url)
  }

  deleteEnderecos(id: number){
    return this.http.delete<Enderecos>(`${this.urlEnderecos}/${id}`);
  }
}
