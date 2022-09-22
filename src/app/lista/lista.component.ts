import { EnderecosService } from './../services/enderecos.service';
import { Enderecos } from './../classes/enderecos';
import { MonitoradorService } from './../services/monitorador.service';
import { Monitorador } from './../classes/monitorador';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  monitorador: Monitorador[] = [];
  displayedColumns = ['nome','cpf','rg','email','contato', 'action']

  constructor(
    private router: Router,
    private monitoradorService: MonitoradorService,
    private enderecosService: EnderecosService

  ) { }

  ngOnInit(): void {
    this.monitoradorService.get().subscribe(monitorador =>{
      this.monitorador = monitorador
      console.log(monitorador)
    })
  }

  onAdd(){
    this.router.navigateByUrl('lista/cadastro')
  }

  onRemove(row: Monitorador){
    this.monitoradorService.deleteMonitorador(row.id).subscribe();
    this.enderecosService.deleteEnderecos(row.id).subscribe();
  }
}
