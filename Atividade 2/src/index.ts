import Novo from "./novo.class";
import Velho from "./velho.class";

const novoImovel = new Novo("Rua José da Cunha", 1500);
novoImovel.imprimirValor();
console.log(
  `Endereço: ${novoImovel.endereco} \nPreço atual: ${novoImovel.preco}`
);

const velhoImovel = new Velho("Rua José da Cunha", 1500, 200);
velhoImovel.imprimirValor();
console.log(`Endereço: ${velhoImovel.endereco} \nPreço: ${velhoImovel.preco}`);
