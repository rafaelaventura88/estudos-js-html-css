
function votar (){
    //var precisa estar no escopo para comparacao ocorrer no ato de clicar o botão
    var  candidatoA = document.querySelector('#candidatoA').checked;
    var voto_texto = document.querySelector('#voto-texto');
    var voto_img = document.querySelector('#voto-img');
    if(candidatoA){
        voto_img.src = "imagens/A.png"
        voto_texto.innerHTML = 'Voto em A, computado com sucesso!'
    }else{
        voto_img.src = "imagens/B.png"
        voto_texto.innerHTML = 'Voto em B, computado com sucesso!'
    }
}
