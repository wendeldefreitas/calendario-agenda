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
  let divAno = document.querySelector(".ano");
  let divMes = document.querySelector(".mes");
  let divCalendario = document.querySelector(".grid-box");
  let divSetaEsquerda = document.querySelector(".seta-esquerda");
  let divSetaDireita = document.querySelector(".seta-direita");
  let divMatriz = document.querySelector(".matriz");
  let divCapela = document.querySelector(".capela");

  //CHAMAR AS FUNÇÕES
  addDiv(divCalendario, 49);
  construirCalendario(data, divAno, divMes, divCalendario);
  clickHandleSetas(divSetaEsquerda, data, divAno, divMes, divCalendario);
  clickHandleSetas(divSetaDireita, data, divAno, divMes, divCalendario);
  clickHandleDatas(divCalendario, divMatriz, divCapela);
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

function clickHandleDatas(divCalendario, divMatriz, divCapela) {
  let index = 0;
  let arrayMatriz = [];
  let arrayCapela = [];
  let horasMatriz = [];
  let horasCapela = [];

  divCalendario.childNodes.forEach((div) => {
    if (index < 7) {
      //ignorar primeira linha do calendario = dias da semana.
    } else {
      div.addEventListener("click", () => {
        //Sobreescrevendo conteudo da Div
        divMatriz.innerHTML = '<div class="title">MATRIZ</div>';
        divCapela.innerHTML = '<div class="title">CAPELA</div>';

        procurarAPI("DATA", div.id).then((data) => {
          if (data.length != 0) {
            arrayMatriz = data.filter((objeto) => objeto.LOCAL.toLowerCase() == "matriz");
            horasMatriz = horasNaoRepetidas(arrayMatriz);
            arrayCapela = data.filter((objeto) => objeto.LOCAL.toLowerCase() == "capela");
            horasCapela = horasNaoRepetidas(arrayCapela);

            mostraNomesPorHora(horasMatriz, arrayMatriz, divMatriz);
            mostraNomesPorHora(horasCapela, arrayCapela, divCapela);
          }
        });
      });
    }
    index++;
  });
}

function horasNaoRepetidas(data){
  let array = [];
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].HORA);
  }
  //retira elementos duplicados
  return [...new Set(array)];
}

function mostraNomesPorHora(arrayHoras, arrayObjetos, divPai){
  arrayHoras.forEach(hora => {

    divPai.innerHTML += `<h3>${hora}</h3>`;
    arrayObjetos.forEach(objeto => {
      if (objeto.HORA == hora) {
        divPai.innerHTML += `<p>${objeto.NOME}</p>`;
      }
    });
  });
}