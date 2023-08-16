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
  
})

function getMesAno(dataAtual, meses){
  let mesAno = document.querySelector(".container-mes-ano");

  mesAno.innerHTML = 
    ` <span">${meses[dataAtual.getMonth()]}</span> ` +
    ` <span>${dataAtual.getFullYear()}</span> `;
}
