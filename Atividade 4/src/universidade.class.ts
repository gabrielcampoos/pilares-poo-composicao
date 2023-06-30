import Departamento from "./departamento.class";

class Universidade extends Departamento {
  #nome: string[];
  #local: string;
  #departamentoUniversidade: string[];

  constructor(
    nomeUniversidade: string[],
    localUniversidade: string,
    departamentoUniversidade: string[]
  ) {
    super(departamentoUniversidade);

    this.#nome = nomeUniversidade;
    this.#local = localUniversidade;
    this.#departamentoUniversidade = departamentoUniversidade;
  }

  get nome(): string[] {
    return this.#nome;
  }

  set nome(novoNome: string[]) {
    this.#nome = novoNome;
  }

  get local(): string {
    return this.#local;
  }

  set local(novoLocal: string) {
    this.#local = novoLocal;
  }

  get departamento(): string[] {
    return this.#departamentoUniversidade;
  }

  set departamento(novoDepartamento: string[]) {
    this.#departamentoUniversidade = novoDepartamento;
  }
}

export default Universidade;
