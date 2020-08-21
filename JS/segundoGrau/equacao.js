let a = prompt("Digite o valor de a:");
let b = prompt("Digite o valor de b");
let c = prompt("Digite o valor de c:");

var num = document.querySelector("#num");
num.innerHTML = `Valor de a ${a}, valor de b${b} e valor de c${c}`; //porque não consigo exibir esse parágrafo?

function bhaskara(a, b, c) {
  let delta = b * b - 4 * a * c;
  let raiz = Math.sqrt(delta);
  let x1 = -b + (raiz / 2) * a;
  let x2 = -b - (raiz / 2) * a;
  let resultado = { delta: delta, x1: x1, x2: x2 };
  return resultado;
}
var resultado = bhaskara(a, b, c);
document.getElementById("msg").innerText = `As raízes da equação são:
 ${resultado.x1} e ${resultado.x2}`;
