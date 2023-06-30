import Imovel from "./imovel.class";

class Velho extends Imovel {
  endereco: string;
  preco: number;
  desconto: number;

  constructor(endereco: string, preco: number, desconto: number) {
    super(endereco, preco);

    this.endereco = endereco;
    this.preco = preco;
    this.desconto = desconto;
  }

  imprimirValor() {
    this.preco -= this.desconto;
  }
}

export default Velho;
