import { Enderecos } from './../classes/enderecos';
import { MonitoradorService } from './../services/monitorador.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CepService} from "../services/cep.service";

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
    private formBuilder: FormBuilder,
    private cepService: CepService
  ) {

  }
  ngOnInit(): void {
    this.formMonitorador = this.formBuilder.group({
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
      enderecos: [this.enderecos]
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
    // @ts-ignore
    this.service.createMonitorador(this.formMonitorador.value, this.enderecos).subscribe();
    this.router.navigateByUrl('lista');
    console.log(this.formMonitorador.value);
    console.log(this.enderecos  );
  }

  onCancel() {
    this.router.navigateByUrl('lista');
  }

  addEndereco(){
    this.enderecos.push({...this.formEnderecos.value});
    console.log(this.enderecos)
  }

  consultaCep(valor: any, formEnderecos: any){
    this.cepService.buscarCep(valor).subscribe((dados) => this.populaForm(dados, formEnderecos))
  }

  populaForm(dados: any, formEnderecos: any){
    formEnderecos.setValue({
      cep: dados.cep,
      cidade: dados.localidade,
      estado: dados.uf,
      end: dados.logradouro,
      bairro: dados.bairro
    })
  }
}
