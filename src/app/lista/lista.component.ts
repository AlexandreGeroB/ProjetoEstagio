import { MonitoradorService } from './../services/monitorador.service';
import { Monitorador } from './../classes/monitorador';
import { Component, OnInit,  TemplateRef,  ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  monitorador: Monitorador[] = [];
  displayedColumns = ['nome','cpf','rg','email','contato', 'action'];


  constructor(
    private router: Router,
    private service: MonitoradorService,
  ) { }

  ngOnInit(): void {
    this.service.get().subscribe(monitorador =>{
      this.monitorador = monitorador
      console.log(monitorador)
    })
  }

  onAdd(){
    this.router.navigateByUrl('lista/cadastro')
  }

  /*
  onDelete(row: Monitorador){
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'})
  }
*/
  onRemove(row: Monitorador){
    this.service.deleteMonitorador(row.id).subscribe();
    //this.service.deleteEnderecos(row.id).subscribe();
  }
}
