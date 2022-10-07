import { Enderecos } from './../classes/enderecos';
import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {

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
      nome: ['', [Validators.required]],
      tipoPessoa: ['fisica', [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11),Validators.maxLength(11)]],
      rg: ['', [Validators.required, Validators.minLength(6),Validators.maxLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.minLength(14),Validators.maxLength(14)]],
      inscricaoEstadual: ['', [Validators.required,Validators.maxLength(14)]],
      contato: ['', [Validators.required]],
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
  }

  onSubmit() {
    this.service.createMonitorador(this.formMonitorador.value).subscribe();
    this.service.createEnderecos(this.enderecos).subscribe();
    this.router.navigateByUrl('lista');
    console.log(this.formMonitorador);
    console.log(this.enderecos);
    alert("Cadastro efetuado com sucesso!")
  }

  onCancel() {
    this.router.navigateByUrl('lista');
  }

  addEndereco(){
    this.enderecos.push({...this.formEnderecos.value});
    console.log(this.enderecos)
  }
}
