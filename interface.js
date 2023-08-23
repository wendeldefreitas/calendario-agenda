"use strict";

document.addEventListener("DOMContentLoaded", () =>{

  let dataCompleta = new Date();
  let dia = dataCompleta.getDate();
  let mes = dataCompleta.getMonth();
  let ano = dataCompleta.getFullYear();

  let gridBox = document.querySelector(".grid-box");
  
  //CHAMAR AS FUNÇÕES
  add_HTML_semana_datas(gridBox);
});

function add_HTML_semana_datas(element){

  for (let index = 0; index < 42; index++) {
    let div = document.createElement("div");
    element.appendChild(div);
  }
}

//CRIAR AS FUNÇÕES DAS SETAS