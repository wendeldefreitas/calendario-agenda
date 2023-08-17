document.addEventListener('DOMContentLoaded', () => {
  let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];
  let dataAtual = new Date();

  getMesAno(dataAtual, meses);
  getDatas(dataAtual);
})

function getMesAno(dataAtual, meses){
  let mesAno = document.querySelector(".container-mes-ano");

  mesAno.innerHTML = 
    ` <span">${meses[dataAtual.getMonth()]}</span> ` +
    ` <span>${dataAtual.getFullYear()}</span> `;
}

function getDatas(dataAtual){
  let novaData = new Date();
  let index = 0;
  let datas = document.querySelectorAll('.data');

  datas.forEach((data) => {
    novaData.setDate(dataAtual.getDate() + (index - dataAtual.getDate()));
    data.textContent = novaData.getDate();
    index++;
  });
}