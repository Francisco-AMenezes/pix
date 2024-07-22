import { Pix } from "faz-um-pix";
import clipboard from "clipboardy";

const key = chave;
const destination = destino;
const city = cidade;
const event = evento;
const value = valor;

const code = await Pix(key, destination, city, value, event, false);

clipboard.writeSync(code);
console.log(code);
