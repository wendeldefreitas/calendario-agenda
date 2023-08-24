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
  let gridBox = document.querySelector(".grid-box");
  let setaEsquerda = document.querySelector(".seta-esquerda");
  let setaDireita = document.querySelector(".seta-direita");

  //CHAMAR AS FUNÇÕES
  addDiv(gridBox, 49);
  setCalendario(dataAtual, htmlAno, htmlMes, gridBox);

  setaEsquerda.addEventListener("click", () => {
      dataAtual.setMonth(dataAtual.getMonth() - 1);
      setCalendario(dataAtual, htmlAno, htmlMes, gridBox);
  });
  setaDireita.addEventListener("click", () => {
      dataAtual.setMonth(dataAtual.getMonth() + 1);
      setCalendario(dataAtual, htmlAno, htmlMes, gridBox);
  });
});

function addDiv(gridBox, qtd) {
  for (let index = 0; index < qtd; index++) {
    let div = document.createElement("div");
    gridBox.appendChild(div);
  }
}

function setCalendario(data, htmlAno, htmlMes, gridBox) {
  //variaveis
  let index = 0;
  //primeiro dia do mes
  let novaData = new Date(data.getFullYear(), data.getMonth(), 1);
  //primeiro data do calendário
  let indexPrimeiroDia = novaData.getDay() + 7; // 7 = os dias da semana
  novaData.setDate(novaData.getDate() - (indexPrimeiroDia - 7));

  //construindo calendario
  htmlAno.innerText = data.getFullYear();
  htmlMes.innerText = MESES[data.getMonth()];

  gridBox.childNodes.forEach((element) => {
    if (index < 7) {
      element.classList.add("semana");
      element.innerText = DIAS_SEMANA[index];
    } else {
      element.classList.add("data");
      element.innerText = novaData.getDate();
      if (novaData.getMonth() != data.getMonth()) {
        element.classList.add("apagado");
      }else{
        element.classList.remove("apagado");
      }
      novaData.setDate(novaData.getDate() + 1);
    }
    index++;
  });
}
