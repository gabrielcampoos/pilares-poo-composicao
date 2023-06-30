import Camarote from "./camarote.class";
import Normal from "./normal.class";
import Vip from "./vip.class";

const normal = new Normal(30);
normal.imprimeValor();
console.log(`Valor normal: ${normal.valor}`);

const vip = new Vip(10);
vip.imprimeValor();
console.log(`Valor VIP: ${vip.valor}`);

const camarote = new Camarote(20);
camarote.imprimeValor();
console.log(`Valor camarote: ${camarote.valor}`);
