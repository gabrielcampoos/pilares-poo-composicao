import Animal from "./animal.class";

class Cachorro extends Animal {
  raca: string;
  cor: string;
  idade: number;

  constructor(
    racaCachorro: string,
    corCachorro: string,
    idadeCachorro: number
  ) {
    super(corCachorro, racaCachorro, idadeCachorro);

    this.raca = racaCachorro;
    this.cor = corCachorro;
    this.idade = idadeCachorro;
  }

  latir() {
    console.log(`O ${this.raca} latiu.\n`);
  }
}

export default Cachorro;
