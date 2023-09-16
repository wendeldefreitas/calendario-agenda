"use strict";
const url = "https://sheetdb.io/api/v1/brwmzm3udxcln";

async function procurarAPI(nomeColuna, valor) {
  const response = await fetch(url + "/search?" + nomeColuna + "=" + valor);
  const data = await response.json();
  return data;
}

function inserirAPI() {
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          id: "INCREMENT",
          name: "Mark",
          age: 18,
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      /*CÓDIGO*/
    });
}

function atualizarAPI() {
  fetch(url, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        name: "Emma",
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // CÓDIGO
    });
}

function deletarAPI() {
  fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // CÓDIGO
    });
}
