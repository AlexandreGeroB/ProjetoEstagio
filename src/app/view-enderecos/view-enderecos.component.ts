import { Component, OnInit, } from '@angular/core';
import {Enderecos} from "../classes/enderecos";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-enderecos',
  templateUrl: './view-enderecos.component.html',
  styleUrls: ['./view-enderecos.component.css']
})
export class ViewEnderecosComponent implements OnInit {

  enderecos: Enderecos[] = [];
  displayedColumns = ['cep', 'end', 'num','bairro','cidade','estado','action'];

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {


  }

  onCancel() {
    this.router.navigateByUrl('lista');
  }

  onAdd(){
    this.router.navigateByUrl('lista/cadastro/enderecos')
  }
}
