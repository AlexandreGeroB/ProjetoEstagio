import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enderecos } from '../classes/enderecos';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  enderecos: Enderecos[] = []  ;

  isLinear = false;

  public formMonitorador!: FormGroup;
  public formEnderecos!: FormGroup;

  constructor(
    private router: Router,
    private service: MonitoradorService,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit() {
    this.formMonitorador = this.formBuilder.group({
      nome: [''],
      tipoPessoa: ['fisica'],
      cpf: [''],
      rg: [''],
      email: [''],
      cnpj: [''],
      inscricaoEstadual: [''],
      contato: [''],
      dataNascimento: [''],
      ativo: [''],
    });

    this.formEnderecos = this.formBuilder.group({
    end: [''],
    num: [''],
    cep: [''],
    bairro: [''],
    cidade: [''],
    estado: [''],
    });
  }

   /* const id = this.route.snapshot.paramMap.get('id')
    this.service.getByIdMonitorador(id).subscribe(monitorador => {
      this.monitorador = monitorador
    });
    this.service.getByIdEnderecos(id).subscribe(endereco => {
     this.endereco = endereco
    });
    */

  update(){
    this.service.putMonitorador(this.formMonitorador.value).subscribe(() =>{
      this.router.navigateByUrl('lista');
      //this.service.putEnderecos(this.endereco).subscribe()
    })
  }

  onCancel(){
    this.router.navigateByUrl('lista')
  }
}
