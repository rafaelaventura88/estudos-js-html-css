
function popularMatrix() {
    var matrix = Array.from(Array(3), () => new Array(3));

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            var num = prompt("Digite um número para linha " + (i + 1) + 'e para a coluna ' + (j + 1) + ':');
            matrix [i][j] = num;
        }
    }
    return matrix;
}

function imprimirMatrix() {
    var msg = document.querySelector("#msg");
    var matrix = popularMatrix();//aqui já tenho uma matrix, um array bidimensional
    var strMatrix = '';/*essa variavel tem que ser criada antes, para não ser substituída ao longo das repetições. 
    Qd crio uma variável dentro do for, a cada iteração ela será criada novamente recebendo novo valor a cada repetição*/
    var soma = 0;
    for (let i = 0; i < 3; i++) {
        for(let j =0; j < 3; j++){
           strMatrix += '<strong style="font-size:60px">' + matrix[i][j] + '</strong>';
           soma += parseInt(matrix[i][j]);    //soma

           if(j ==2){
               strMatrix += '</br>';
           }
        }
        
    }
    msg.innerHTML = strMatrix + '</br>' + "A soma dessa matriz é: "+ soma;
    
}
