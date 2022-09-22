import { Monitorador } from './../classes/monitorador';
import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enderecos } from '../classes/enderecos';
import { EnderecosService } from '../services/enderecos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  monitorador: Monitorador = {
    nome: '',
    tipoPessoa: 'fisica',
    cpf: '',
    rg: '',
    email: '',
    cnpj: '',
    inscricaoEstadual: '',
    contato: '',
    id: 0,
  };

  enderecos: Enderecos = {
    end: '',
    num: '',
    cep: '',
    bairro: '',
    cidade: '',
    estado: '',
    id: 0,
  };

  constructor(
    private router: Router,
    private monitoradorService: MonitoradorService,
    private enderecosService: EnderecosService,
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.monitoradorService.createMonitorador(this.monitorador).subscribe();
    this.enderecosService.createEnderecos(this.enderecos).subscribe();
  
    this.router.navigateByUrl('lista');
  }

  onCancel() {
    this.router.navigateByUrl('lista');
  }
}
