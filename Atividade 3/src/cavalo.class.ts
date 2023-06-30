import Animal from "./animal.class";

class Cavalo extends Animal {
  raca: string;
  cor: string;
  idade: number;

  constructor(racaCavalo: string, corCavalo: string, idadeCavalo: number) {
    super(corCavalo, racaCavalo, idadeCavalo);

    this.raca = racaCavalo;
    this.cor = corCavalo;
    this.idade = idadeCavalo;
  }

  trotar() {
    console.log(`O ${this.raca} trotou.\n`);
  }
}

export default Cavalo;
