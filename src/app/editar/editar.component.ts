import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enderecos } from '../classes/enderecos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Monitorador } from '../classes/monitorador';

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
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.formMonitorador = this.formBuilder.group({
      id: [0],
      nome: ['', [Validators.required]],
      tipoPessoa: ['fisica'],
      cpf: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      rg: ['', [Validators.required, Validators.minLength(7),Validators.maxLength(7)]],
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.minLength(14),Validators.maxLength(14)]],
      inscricaoEstadual: ['', [Validators.required,Validators.minLength(12),Validators.maxLength(12)]],
      contato: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      dataNascimento: ['', [Validators.required]],
      ativo: ['sim', [Validators.required]],
    });

    this.formEnderecos = this.formBuilder.group({
    end: ['', [Validators.required]],
    num: ['', [Validators.required, Validators.maxLength(5)]],
    cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
    bairro: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    estado: ['', [Validators.required]],
    });


    const monitorador: Monitorador = this.route.snapshot.data['monitorador'];
    this.formMonitorador.setValue({
      id: monitorador.id,
      nome: monitorador.nome,
      tipoPessoa: monitorador.tipoPessoa,
      cpf: monitorador.cpf,
      rg: monitorador.rg,
      email: monitorador.email,
      cnpj: monitorador.cnpj,
      inscricaoEstadual: monitorador.inscricaoEstadual,
      contato: monitorador.contato,
      dataNascimento: monitorador.dataNascimento,
      ativo: monitorador.ativo,
    });
    console.log(monitorador);

  }

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
