import { Monitorador } from './../classes/monitorador';
import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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
    private monitoradorService: MonitoradorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.monitoradorService.getById(id).subscribe(monitorador => {
      this.monitorador = monitorador
    });
  }

  updateMonitorador(){
    this.monitoradorService.put(this.monitorador).subscribe(() =>{
      this.router.navigateByUrl('lista')
    })
  }

  onCancel(){
    this.router.navigateByUrl('lista')
  }
}
