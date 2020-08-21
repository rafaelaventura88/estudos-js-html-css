//variaveis globais
//resetar o valor para zero

var cem = 0;
var cinquenta = 0;
var vinte = 0;
var dez = 0;
var cinco = 0;


function calcularNotas() {
    var valor = document.querySelector('#valorSaque').value;
    var notas = document.querySelector('#notas');
    var fim = document.querySelector("#msg");
    //calculo de notas
    
    while (valor > 0) {
        if (valor % 100 == 0) {
            valor -= 100;
            cem++;
        }
        else if (valor % 50 == 0) {
            valor -= 50;
            cinquenta++;
        }
        else if (valor % 20 == 0) {
            valor -= 20;
            vinte++;
        }
        else if (valor % 10 == 0) {
            valor -= 10;
            dez++;
        }
        else if (valor % 5 == 0) {
            valor -= 5;
            cinco++;
        }


    }
    alert(`${cem} ${cinquenta} ${vinte} ${dez} ${cinco}`);


    while (temNota()) {
        if (cem > 0) {
            var img = document.createElement('img');
            var imgSalva = notas.appendChild(img);
            imgSalva.src = "imagens/cem.jpg";
            cem--;
        }
        else if (cinquenta > 0) {
            var img = document.createElement('img');
            var imgSalva = notas.appendChild(img);
            imgSalva.src = "imagens/cinquenta.jpg";
            cinquenta--;
        }
        else if (vinte > 0) {
            var img = document.createElement('img');
            var imgSalva = notas.appendChild(img);
            imgSalva.src = "imagens/vinte.jpg";
            vinte--;
        }
        else if (dez > 0) {
            var img = document.createElement('img');
            var imgSalva = notas.appendChild(img);
            imgSalva.src = "imagens/dez.jpg";
            dez--;

        }
        else if (cinco > 0) {
            var img = document.createElement('img');
            var imgSalva = notas.appendChild(img);
            imgSalva.src = "imagens/cinco.jpg";
            cinco--;
        }
    }
    fim.innerHTML = "Saque realizado com sucesso!";
    setTimeout(function(){
        window.location.reload();
    },5000);

}



function temNota() {
    if (cem > 0 || cinquenta > 0 || vinte > 0 || dez > 0 || cinco > 0) {
        return true;
    } else {
        return false;
    }
}

/*
Tem nota simplificada
 
 
DESAFIO:
atualizar pagina após paragrafo saque realizado...
se digitar valor invalido sair do loop (com um alert)
mostrar opções de notas (3 de vinte ou 1 de 50 +1 de 10 etc)
*/
function temNotaSimplificada() {
    return (cem > 0 || cinquenta > 0 || vinte > 0 || dez > 0 || cinco > 0);
}
