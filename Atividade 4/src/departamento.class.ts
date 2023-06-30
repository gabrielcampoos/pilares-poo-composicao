class Departamento {
  #nome: string[];

  constructor(nomeDepartamento: string[]) {
    this.#nome = nomeDepartamento;
  }

  get nome(): string[] {
    return this.#nome;
  }

  set nome(novoNome: string[]) {
    this.#nome = novoNome;
  }
}

export default Departamento;
