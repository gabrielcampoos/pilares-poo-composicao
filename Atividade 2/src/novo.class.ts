import Imovel from "./imovel.class";

class Novo extends Imovel {
  endereco: string;
  adicionalNovoPreco: number;

  constructor(endereco: string, adicionalNovoPreco: number) {
    super(endereco, adicionalNovoPreco);

    this.endereco = endereco;
    this.adicionalNovoPreco = adicionalNovoPreco;
  }

  imprimirValor() {
    this.preco += this.adicionalNovoPreco;
  }
}

export default Novo;
