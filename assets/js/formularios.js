document.addEventListener("DOMContentLoaded", () => {
  inputQtdServidoresClickHandle();
});

async function inputQtdServidoresClickHandle() {
  const form = document.querySelector("form");
  const inputQtdServidores = document.querySelector("#qtdServidores");
  let div = document.createElement("div");
  div.className = "funcao";

  inputQtdServidores.addEventListener("input", () => {
    let text =
      "<label for='funcao'>Função 1º </label>" +
      "<input type='text' name='funcao' id='funcao'/><br>";

    for (let index = 1; index < inputQtdServidores.value; index++) {
      text += `
      <label for='funcao'>Função ${index + 1}º </label>
      <input type="text" name="funcao" id="funcao"/><br>
      `;
    }
    div.innerHTML = text;
    form.appendChild(div);
  });
}
