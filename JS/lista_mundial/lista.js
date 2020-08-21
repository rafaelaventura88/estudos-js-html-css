//var produtos = ["chocolate", "queijo", "vinho"];

var alimentos = [];

contador = 0;
let input = prompt("Quantos produtos na lista:");

while (contador < parseInt(input)) {
  //aqui estou preenchendo meu array;
  let nomeAlimento = prompt("Digite o nome do item desejado: ");
  alimentos.push(nomeAlimento);
  contador++;
} //aqui tenho um array completo

function listaCompras(alimentos) {
  let ul = document.getElementById("itens"); //aqui não preciso de #

  for (let valor of alimentos) {
    let li = document.createElement("li"); //aqui não preciso de #
    li.innerText = valor;
    ul.appendChild(li);
  }
}
listaCompras(alimentos);
