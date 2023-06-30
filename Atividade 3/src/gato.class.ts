import Animal from "./animal.class";

class Gato extends Animal {
  raca: string;
  cor: string;
  idade: number;

  constructor(racaGato: string, corGato: string, idadeGato: number) {
    super(racaGato, corGato, idadeGato);

    this.raca = racaGato;
    this.cor = corGato;
    this.idade = idadeGato;
  }

  miar() {
    console.log(`O ${this.raca} miou.`);
  }
}

export default Gato;
