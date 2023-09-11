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
  let dataAtual = new Date();
  let htmlAno = document.querySelector(".ano");
  let htmlMes = document.querySelector(".mes");
  let quadrados = document.querySelector(".grid-box");
  let setaEsquerda = document.querySelector(".seta-esquerda");
  let setaDireita = document.querySelector(".seta-direita");

  //CHAMAR AS FUNÇÕES
  addDiv(quadrados, 49);
  setCalendario(dataAtual, htmlAno, htmlMes, quadrados);

  setaEsquerda.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() - 1);
    setCalendario(dataAtual, htmlAno, htmlMes, quadrados);
  });
  setaDireita.addEventListener("click", () => {
    dataAtual.setMonth(dataAtual.getMonth() + 1);
    setCalendario(dataAtual, htmlAno, htmlMes, quadrados);
  });

  clickHandleDatas(quadrados);
});

function addDiv(quadrados, qtd) {
  for (let index = 0; index < qtd; index++) {
    let div = document.createElement("div");
    quadrados.appendChild(div);
  }
}

function setCalendario(data, htmlAno, htmlMes, quadrados) {
  let index = 0;
  let primeiroDiaMes = new Date(data.getFullYear(), data.getMonth(), 1);
  let primeiroQuadrado = new Date(primeiroDiaMes);
  primeiroQuadrado.setDate(primeiroQuadrado.getDate() - primeiroQuadrado.getDay());
  htmlAno.innerText = data.getFullYear();
  htmlMes.innerText = MESES[data.getMonth()];

  quadrados.childNodes.forEach((element) => {
    if (index < 7) {
      element.classList.add("semana");
      element.innerText = DIAS_SEMANA[index];
    } else {
      element.classList.add("data");
      element.innerText = primeiroQuadrado.getDate();

      //deixa "APAGADO" os dias que não são do mês atual.
      if (primeiroQuadrado.getMonth() != data.getMonth()) {
        element.classList.add("apagado");
      } else {
        element.classList.remove("apagado");
      }

      primeiroQuadrado.setDate(primeiroQuadrado.getDate() + 1);
    }
    index++;
  });
}

function clickHandleDatas(quadrados) {
  let index = 0;

  quadrados.childNodes.forEach((element) => {
    if (index < 7) {
      //ignorar primeira linha, dias da semana.
    } else {
      element.addEventListener("click", () => {
        //Verificar a data;
        //Buscar na planilha todas as informações queferente a essa data;
        //Atualizar as informações no campo ".box-tarefas" do HTML;
        console.log(getData());
      });
    }
    index++;
  });
}
