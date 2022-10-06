import { MonitoradorService } from './../services/monitorador.service';
import { Monitorador } from './../classes/monitorador';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

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
    private service: MonitoradorService,
    public dialog: MatDialog,
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

  onRemove(row: Monitorador){
    this.service.deleteMonitorador(row.id).subscribe();
    //this.service.deleteEnderecos(row.id).subscribe();
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
