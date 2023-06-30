export default abstract class Animal {
  cor: string;
  tipo: string;
  idade: number;

  constructor(corAnimal: string, tipoAnimal: string, idadeAnimal: number) {
    this.cor = corAnimal;
    this.tipo = tipoAnimal;
    this.idade = idadeAnimal;
  }

  andar() {
    console.log(`O ${this.tipo} andou.`);
  }

  pular() {
    console.log(`O ${this.tipo} pulou.`);
  }
}
