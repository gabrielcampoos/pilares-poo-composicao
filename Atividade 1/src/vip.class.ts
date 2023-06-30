import Ingresso from "./Ingresso.class";

class Vip extends Ingresso {
  _valorAdicional: number;

  constructor(valorAdicional: number) {
    super();
    this._valorAdicional = valorAdicional;
  }

  imprimeValor() {
    this.valor += this._valorAdicional;
  }
}
export default Vip;
