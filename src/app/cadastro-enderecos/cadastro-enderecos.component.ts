import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MonitoradorService} from "../services/monitorador.service";

@Component({
  selector: 'app-cadastro-enderecos',
  templateUrl: './cadastro-enderecos.component.html',
  styleUrls: ['./cadastro-enderecos.component.css']
})
export class CadastroEnderecosComponent implements OnInit {

  isLinear = false;

  public formEnderecos!: FormGroup;

  constructor(
    private router: Router,
    private service: MonitoradorService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
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
    this.router.navigateByUrl('lista/enderecos/{{ id }}');
    console.log(this.formEnderecos  );
  }

  onCancel() {
    this.router.navigateByUrl('lista/enderecos/{{ id }}');
  }
}
