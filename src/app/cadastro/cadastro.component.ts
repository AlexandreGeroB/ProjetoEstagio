import { Monitorador } from './../classes/monitorador';
import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  monitorador: Monitorador = {
    nome: '',
    cpf: '',
    rg: '',
    email: '',
    cnpj: '',
    inscricaoEstadual: '',
    contato: '',
    id: 0
  }

  constructor(
    private router: Router,
    private monitoradorService: MonitoradorService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.monitoradorService.create(this.monitorador).subscribe()
    this.router.navigateByUrl('lista')
  }

  onCancel(){
    this.router.navigateByUrl('lista')
  }

}
