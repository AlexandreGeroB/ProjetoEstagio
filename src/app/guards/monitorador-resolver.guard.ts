import { MonitoradorService } from './../services/monitorador.service';
import { Monitorador } from './../classes/monitorador';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoradorResolverGuard implements Resolve<Monitorador> {

  constructor(private service: MonitoradorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Monitorador> {
    if (route.params && route.params['id']) {
      return this.service.getByIdMonitorador(route.params['id']);
    }

    return of({ id: 0 , nome: '', tipoPessoa: '', cpf: '', rg: '', cnpj: '', inscricaoEstadual: '', email: '', contato: '',dataNascimento:'',ativo:'', enderecos: []});  }

}


