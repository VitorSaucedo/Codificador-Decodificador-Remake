import { botaoVoltar, areaDeTexto, areaDeTextoCodificado, botaoCopiar, botaoCriptografar, botaoDescriptografar, botaoDiv, containerPai } from "../script.js";

export function volta() {
  botaoVoltar.remove();
  botaoCopiar.remove();
  botaoDiv.appendChild(botaoCriptografar);
  botaoDiv.appendChild(botaoDescriptografar);
  containerPai.insertBefore(areaDeTexto, botaoDiv);
  areaDeTexto.value = "";
  areaDeTextoCodificado.remove();
  areaDeTexto.style.display = "inline-block";
}


export function copia() {
  areaDeTextoCodificado.select();
  areaDeTextoCodificado.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(areaDeTextoCodificado.value);
}