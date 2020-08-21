/*
- pedir nove vezes um número para o usuário com o prompt
- imprimir em forma de matriz 3 x 3
- destacar a diagonal principal em uma cor diferente


*/


var msg = document.querySelector('#msg');

function gerarMatriz (){
    var str = '';
    for(let i = 0; i < 3; i ++){
        for(let j = 0; j < 3; j++){
            var input = prompt('Digite um número para linha :' + (i+1) + 'e para coluna:'+ (j +1));
            if(i == j){
                str += '<b style="color:red">' + input + '</b> ';
            } else{
                str += '<b>' + input + '</b> ';
            }
            if(j == 2){
                str+= '<br>'
            }
        }
    }
    return str;
}

function paragrafo(){
    var mensagem = gerarMatriz();
    msg.innerHTML = mensagem;
}
