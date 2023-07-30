export class autorpf {
  constructor(
    nome: string,
    dataDeNascimento: Date,
    categoria: Categoria[],
    private _cnpj: string,
    private _razaoSocial: string
  ) {
    super(nome, dataDeNascimento, categoria);
  }
}
