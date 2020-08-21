function checarIdade() {
    let idade = document.querySelector('#idade').value;
    let mensagem = document.querySelector('#mensagem');//sem value pois quero o paragrafo em si

    if (idade >= 18 && idade <= 70) {
        //alert(desce a janela) similar ao console.log
        //innerHTML comando usado para alterar um texto no HTML
        mensagem.innerHTML = 'Voto obrigatório!';
        mensagem.style.backgroundColor = "green";
        window.open('voto.html')

    }
    else if (idade >= 16) {
        mensagem.innerHTML = 'Voto facultativo!';
        mensagem.style.backgroundColor = "yellow";
        if( votoFacultativo()){
            window.open("voto.html")
        }else{
            alert('Usuário não deseja votar.')
        }

    }
    //else if(idade >= 16  idade < 18 || idade >70){
    // alert('Voto facultativo')

    else {
        mensagem.innerHTML = 'Voto proibido!';
        mensagem.style.backgroundColor = "red";
        
    }

    function votoFacultativo() {
        //funcao confirm retorna um boolean e emite duas opçoes: ok ou cancel
        var votou = confirm("Você deseja votar?");
        return votou;

    }

}
