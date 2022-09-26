import { Monitorador } from './../classes/monitorador';
import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enderecos } from '../classes/enderecos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {

  listaEndereco: Enderecos[] = [];

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

  isLinear = false;


  constructor(
    private router: Router,
    private service: MonitoradorService,
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.service.createMonitorador(this.monitorador).subscribe();
    this.service.createEnderecos(this.enderecos).subscribe();
    this.router.navigateByUrl('lista');
    alert("Cadastro efetuado com sucesso!")
  }

  onCancel() {
    this.router.navigateByUrl('lista');
  }

  addEndereco(){
    this.listaEndereco.push({...this.enderecos});
    console.log(this.listaEndereco)
  }
}
