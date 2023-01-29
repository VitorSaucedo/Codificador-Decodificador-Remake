import { areaDeTexto, areaDeTextoCodificado, botaoDiv, containerPai } from "../script.js";
import { apareceBotaoVoltarECopiar } from "./apareceBotaoVoltarECopiar.js";

export function descriptografa() {
    if (areaDeTexto.value == "") {
        alert("Digite algo para descriptografar!");
        return;
    }
    apareceBotaoVoltarECopiar();
    let texto = areaDeTexto.value;
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    areaDeTexto.style.display = "none";
    containerPai.insertBefore(areaDeTextoCodificado, botaoDiv);
    areaDeTextoCodificado.setAttribute(`rows`, `10`);
    areaDeTextoCodificado.setAttribute(`cows`, `30`);
    areaDeTextoCodificado.setAttribute(`readonly`, `readonly`);
    areaDeTextoCodificado.value = texto;
}

export function criptografa() {
    if (areaDeTexto.value == "") {
        alert("Digite algo para criptografar!");
        return;
    }
    apareceBotaoVoltarECopiar();
    let texto = areaDeTexto.value;
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    areaDeTexto.style.display = "none";
    containerPai.insertBefore(areaDeTextoCodificado, botaoDiv);
    areaDeTextoCodificado.setAttribute(`rows`, `10`);
    areaDeTextoCodificado.setAttribute(`cows`, `30`);
    areaDeTextoCodificado.setAttribute(`readonly`, `readonly`);
    areaDeTextoCodificado.value = texto;
}
