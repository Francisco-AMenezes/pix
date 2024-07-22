import { Pix } from "faz-um-pix";
import clipboard from "clipboardy";

const key = process.argv[2]
const destination = process.argv[3]
const city = process.argv[4]
const event = process.argv[5]
const value = process.argv[6]

const code = await Pix(key, destination, city, value, event, false);

clipboard.writeSync(code);
console.log(code);
