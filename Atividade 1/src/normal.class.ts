import Ingresso from "./Ingresso.class";

class Normal extends Ingresso {
  _valorNormal: number;

  constructor(valorNormal: number) {
    super();
    this._valorNormal = valorNormal;
  }
  imprimeValor() {
    this.valor = this._valorNormal;
  }
}

export default Normal;
