"use strict";
const url = "https://sheetdb.io/api/v1/brwmzm3udxcln";

function getData() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      /*CÓDIGO*/
    });
}

async function searchData(colum, value) {
  const response = await fetch(url + "/search?" + colum + "=" + value);
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

function updateData() {
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

function deleteData() {
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
