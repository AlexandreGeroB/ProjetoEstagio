export interface Enderecos {
  id: number,
  end: string,
  num: string,
  cep: string,
  bairro: string,
  cidade: string,
  estado: string,
  monitorador:number
}

export class Enderecos {
  id: number;
  end: string;
  num: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  monitorador:number

  constructor(
  id: number,
  end: string,
  num: string,
  cep: string,
  bairro: string,
  cidade: string,
  estado: string,
  monitorador:number

    ){
      this.id = id;
      this.end = end;
      this.num = num;
      this.cep = cep;
      this.bairro = bairro;
      this.cidade = cidade;
      this.estado = estado;
      this.monitorador = monitorador
  }
}
