import { MonitoradorService } from './../services/monitorador.service';
import { Monitorador } from './../classes/monitorador';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  monitorador: Monitorador[] = [];
  displayedColumns = ['id','nome','cpf','rg','email','contato', 'action']

  constructor(
    private router: Router,
    private monitoradorService: MonitoradorService
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
}
