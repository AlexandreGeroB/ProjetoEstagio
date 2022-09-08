import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enderecos } from '../classes/enderecos';

@Injectable({
  providedIn: 'root'
})
export class EnderecosService {
  urlBase = "http://localhost:3000/listaEnderecos"

  constructor(
    private http: HttpClient,

  ) { }

  createEnderecos(enderecos:Enderecos): Observable<Enderecos>{
    return this.http.post<Enderecos>(this.urlBase, enderecos)
  }

  getByIdEnderecos(id: any): Observable<Enderecos> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Enderecos>(url)
  }

  putEnderecos(enderecos: Enderecos): Observable<Enderecos>{
    const url = `${this.urlBase}/${enderecos.id}`
    return this.http.put<Enderecos>(url, enderecos)
  }

  deleteEnderecos(id: number){
    return this.http.delete<Enderecos>(`${this.urlBase}/${id}`);
  }


}

