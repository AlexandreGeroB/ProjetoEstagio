export class Monitorador {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  email: string;
  cnpj: string;
  inscricaoEstadual: string;
  contato: string;
  dataNascimento: string;
  ativo: string


  constructor(
    id:number,
    nome: string,
    cpf: string,
    rg: string,
    email: string,
    cnpj: string,
    inscricaoEstadual: string,
    contato: string,
    dataNascimento: string,
    ativo: string

    ){
      this.id = id;
      this.nome = nome;
      this.cpf = cpf;
      this.rg = rg;
      this.email = email;
      this.cnpj = cnpj;
      this.inscricaoEstadual = inscricaoEstadual;
      this.contato = contato;
      this.dataNascimento = dataNascimento;
      this.ativo = ativo
  }
}
