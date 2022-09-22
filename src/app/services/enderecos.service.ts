import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enderecos } from '../classes/enderecos';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {

  urlBase = "api/enderecos"

  constructor(
    private http: HttpClient,

  ) { }

  createEnderecos(enderecos:Enderecos){
    return this.http.post<Enderecos>(this.urlBase, enderecos)
  }

  getByIdEnderecos(id: any): Observable<Enderecos> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Enderecos>(url)
  }

  putEnderecos(monitorador: Enderecos): Observable<Enderecos>{
    return this.http.post<Enderecos>(this.urlBase, monitorador)
  }

  deleteEnderecos(id: number){
    return this.http.delete<Enderecos>(`${this.urlBase}/${id}`);
  }


}

