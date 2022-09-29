import { Enderecos } from './enderecos';

export interface Monitorador {
  id: number,
  tipoPessoa: string,
  nome: string,
  cpf?: string,
  rg?: string,
  email: string,
  cnpj?: string,
  inscricaoEstadual?: string,
  contato: string,
}
