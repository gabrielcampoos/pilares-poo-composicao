import Cachorro from "./cachorro.class";
import Cavalo from "./cavalo.class";
import Gato from "./gato.class";

const cachorro1 = new Cachorro("Pastor Alemão", "Capa Preta", 4);
cachorro1.andar();
cachorro1.pular();
cachorro1.latir();

const cavalo1 = new Cavalo("Malhado", "Branco", 10);
cavalo1.andar();
cavalo1.pular();
cavalo1.trotar();

const gato1 = new Gato("Persa", "Laranja", 3);
gato1.andar();
gato1.pular();
gato1.miar();
