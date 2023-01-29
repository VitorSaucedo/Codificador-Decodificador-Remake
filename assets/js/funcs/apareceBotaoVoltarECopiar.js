import {
    botaoCopiar,
    botaoCriptografar,
    botaoDescriptografar,
    botaoDiv,
    botaoVoltar,
} from "../script.js";

export function apareceBotaoVoltarECopiar() {
    botaoCriptografar.remove();
    botaoDescriptografar.remove();
    botaoDiv.appendChild(botaoVoltar);
    botaoDiv.appendChild(botaoCopiar);
}
