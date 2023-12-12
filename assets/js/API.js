"use strict";
const url = "https://sheetdb.io/api/v1/846i0fnsh4zmt";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
async function searchAPI(nomeColuna, valor) {
  const response = await fetch(url + "/search?" + nomeColuna + "=" + valor);
  const data = await response.json();
  return data;
}

function insertData() {
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

function updateAPI() {
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

function deletData() {
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
