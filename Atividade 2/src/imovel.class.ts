abstract class Imovel {
  endereco: string;
  preco: number;

  constructor(enderecoImovel: string, precoImovel: number) {
    this.endereco = enderecoImovel;
    this.preco = precoImovel;
  }

  adicionalPreco(valor: number) {
    this.preco += valor;
  }
}

export default Imovel;
