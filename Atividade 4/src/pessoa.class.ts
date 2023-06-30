import Universidade from "./universidade.class";

class Pessoa extends Universidade {
  #nome: string[];
  #data: string;

  constructor(
    nomePessoa: string[],
    dataPessoa: string,
    nomeUniversidade: string[],
    localUniversidade: string,
    departamentoUniversidade: string[]
  ) {
    super(nomeUniversidade, localUniversidade, departamentoUniversidade);

    this.#nome = nomePessoa;
    this.#data = dataPessoa;
  }

  get nome(): string[] {
    return this.#nome;
  }

  set nome(novoNome: string[]) {
    this.#nome = novoNome;
  }

  get data(): string {
    return this.#data;
  }

  set data(novaData: string) {
    this.#data = novaData;
  }

  informarAtributos() {
    console.log(
      `Nome: ${this.#nome} \nNascimento: ${this.#data} \nTrabalha: ${
        super.nome
      } \nDepartamento: ${super.departamento} \nLocal: ${super.local}`
    );
  }
}
export default Pessoa;
