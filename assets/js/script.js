import { copia, volta } from "./funcs/volta-copia.js";
import { criptografa, descriptografa } from "./funcs/descriptografa-criptografa.js";

export const botaoDiv = document.getElementById("containerBotao");
export const botaoDescriptografar = document.getElementById("descriptografar");
export const botaoVoltar = document.createElement("button");
export const botaoCriptografar = document.getElementById("criptografar");
export const areaDeTextoCodificado = document.createElement("textarea");
export const areaDeTexto = document.getElementById("textarea");
export const botaoCopiar = document.createElement("button");
export const containerPai = document.querySelector(".container");

areaDeTextoCodificado.classList.add("textarea");
botaoVoltar.classList.add("criptografar");
botaoCopiar.classList.add("descriptografar");

botaoVoltar.innerHTML = `Voltar`;
botaoCopiar.innerHTML = `Copiar`;


botaoCriptografar.addEventListener("click", criptografa);

botaoVoltar.addEventListener("click", volta);

botaoCopiar.addEventListener("click", copia);

botaoDescriptografar.addEventListener("click", descriptografa);


