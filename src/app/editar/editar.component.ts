import { EnderecosService } from './../services/enderecos.service';
import { Monitorador } from './../classes/monitorador';
import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enderecos } from '../classes/enderecos';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  monitorador: Monitorador = {
    nome: '',
    tipoPessoa: '',
    cpf: '',
    rg: '',
    email: '',
    cnpj: '',
    inscricaoEstadual: '',
    contato: '',
    id: 0
  }

  enderecos: Enderecos = {
    end: '',
    num: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    id: 0
  }

  constructor(
    private monitoradorService: MonitoradorService,
    private enderecosService: EnderecosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.monitoradorService.getByIdMonitorador(id).subscribe(monitorador => {
      this.monitorador = monitorador
    });

    this.enderecosService.getByIdEnderecos(id).subscribe(enderecos => {
      this.enderecos = enderecos
    });
  }

  update(){
    this.monitoradorService.putMonitorador(this.monitorador).subscribe(() =>{
      this.router.navigateByUrl('lista');
      this.enderecosService.putEnderecos(this.enderecos).subscribe()
    })
  }

  onCancel(){
    this.router.navigateByUrl('lista')
  }
}
