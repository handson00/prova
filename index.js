import { cifraLetra, descifraLetra, criptografia } from './cesar.js';

let mensagemOriginal = "prova de programacao";
let chave = 3;

let mensagemCifrada = criptografia(mensagemOriginal, chave, cifraLetra);
console.log("Mensagem Original: " + mensagemOriginal);
console.log("Mensagem Cifrada: " + mensagemCifrada);

let mensagemDecifrada = criptografia(mensagemCifrada, chave, descifraLetra);
console.log("Mensagem Decifrada: " + mensagemDecifrada);
