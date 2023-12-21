"use strict";

const DIAS_SEMANA = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const MESES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

document.addEventListener("DOMContentLoaded", () => {
  //VARIAVEIS
  let data = new Date();
  let dadosDoAplicativo = null;
  const divAno = document.querySelector(".ano");
  const divMes = document.querySelector(".mes");
  const divCalendario = document.querySelector(".grid-box");
  const divSetaEsquerda = document.querySelector(".seta-esquerda");
  const divSetaDireita = document.querySelector(".seta-direita");
  const divMatriz = document.querySelector(".matriz");
  const divCapela = document.querySelector(".capela");

  async function organizaChamadasFuncoes() {
    addDiv(divCalendario, 49);
    construirCalendario(data, divAno, divMes, divCalendario);
    clickHandleSetas(divSetaEsquerda, data, divAno, divMes, divCalendario);
    clickHandleSetas(divSetaDireita, data, divAno, divMes, divCalendario);
    dadosDoAplicativo = localStorage.getItem("dadosDoAplicativo");
    if (!dadosDoAplicativo) {
      dadosDoAplicativo = await getData();
    }
    clickHandleDatas(dadosPlanilha, divCalendario, divMatriz, divCapela);
  }
  organizaChamadasFuncoes();
});

function addDiv(elementoPai, qtd) {
  for (let index = 0; index < qtd; index++) {
    let div = document.createElement("div");
    elementoPai.appendChild(div);
  }
}

function construirCalendario(data, divAno, divMes, divCalendario) {
  //variaveis
  let index = 0;
  let primeiroDiaMes = new Date(data.getFullYear(), data.getMonth(), 1);
  let primeiroQuadrado = new Date(primeiroDiaMes);

  //instruções
  primeiroQuadrado.setDate(
    primeiroQuadrado.getDate() - primeiroQuadrado.getDay()
  );
  divAno.innerText = data.getFullYear();
  divMes.innerText = MESES[data.getMonth()];

  divCalendario.childNodes.forEach((div) => {
    if (index < 7) {
      div.classList.add("semana");
      div.innerText = DIAS_SEMANA[index];
    } else {
      div.id = primeiroQuadrado.toLocaleDateString("pt-BR");
      div.classList.add("data");
      div.innerText = primeiroQuadrado.getDate();

      //deixa "APAGADO" os dias que não são do mês atual.
      if (primeiroQuadrado.getMonth() != data.getMonth()) {
        div.classList.add("apagado");
      } else {
        div.classList.remove("apagado");
      }

      primeiroQuadrado.setDate(primeiroQuadrado.getDate() + 1);
    }
    index++;
  });
}

function clickHandleSetas(divSeta, data, divAno, divMes, divCalendario) {
  divSeta.addEventListener("click", () => {
    if (divSeta.className == "seta-esquerda") {
      data.setMonth(data.getMonth() - 1);
    } else {
      data.setMonth(data.getMonth() + 1);
    }
    construirCalendario(data, divAno, divMes, divCalendario);
  });
}

function clickHandleDatas(dadosPlanilha, divCalendario, divMatriz, divCapela) {
  //variaveis
  let index = 0;

  //instruções
  divCalendario.childNodes.forEach((div) => {
    if (index < 7) {
      //ignorar primeira linha do calendario = dias da semana.
    } else {
      div.addEventListener("click", () => {});
    }
    index++;
  });
}
