var msg = document.querySelector("#msg");

function gerarMatriz(){

    var matriz = Array.from(Array(3),() => new Array(3));
    var maior = 0;

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            var num = prompt('Digite um número para linha' + (i+1)+ 'e para a coluna'+ (j+1));
            matriz [i][j] = num;
        }
    }
    return matriz;
}
   
function imprimirMatrizEMaior(){
    var msg = document.querySelector("#msg");
    var matriz = gerarMatriz();//aqui já tenho uma matriz
    var strNum = '';
    var maior = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            strNum += '<strong style="font-size: 60px">'+ matriz[i][j]+'</strong>'
            if(matriz[i][j]> maior){
                maior = matriz[i][j];
                
            }
            if(j == 2){
                strNum += '</br>'
            }
        }
    }
    msg.innerHTML = strNum +' </br>'+" O maior número é: " + maior;


}
