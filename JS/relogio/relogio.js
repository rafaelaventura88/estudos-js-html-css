let nome = prompt("Relógio dinâmico - Para começar digite seu nome:");
//alert(nome);//da um alert na string e nao no prompt

function mensagem(){
    let data = new Date;//estou instanciando o Objeto Date

    function dia() {//dom a sab (0... 6)
        let dia = data.getDay();//domingo é o primeiro dia da semana, logo o dia zero(0)
        return dia;
    }
    
    function diaFormatado(valor) {
        switch (valor) {
            case 0:
                return "Domingo"
            case 1:
                return "Segunda"
            case 2:
                return "Terça"
            case 3:
                return "Quarta"
            case 4:
                return "Quinta"
            case 5:
                return "Sexta"
            case 6:
                return "Sábado"
        }
    }
    
    
    
    function diaMes() {// 0 a 31, a biblioteca verifica se tem 30 ou 31 dias etc...
        let diaMes = data.getDate();
        return diaMes;
    }
    //desafio: colocar o valor do mês como String(switch)
    function mes() {
        let mes = data.getMonth();
        return 1 + mes;
    }
    
    function ano() {
        let ano = data.getFullYear();
        return ano;
    }
    
    function hora_() {
        let hora = data.getHours();
        return hora;
    }
    
    function minuto() {
        let minuto = data.getMinutes();
        return minuto;
    }
    
    function segundo() {
        let segundo = data.getSeconds();
        return segundo;
    }
    
    function zero(valor) {//parametro valor pertence ao escopo
        if (valor < 10) {
            return "0" + valor;
        } else {
            return valor;
        }
    }
    
    var dia = diaFormatado(dia());
    var diaMes = zero(diaMes());
    var mes = zero(mes());
    var ano = ano();
    var hora = zero(hora_());
    var minuto = zero(minuto());
    var segundo = zero(segundo());
    var texto = document.querySelector('#texto');
    var horaCalculo = hora_();
    var icone;
    
    if(horaCalculo >= 5 && horaCalculo < 12){
        icone = "🌞";
    }
    else if (horaCalculo >= 12 && horaCalculo < 18){
        icone = '🌗';
    }
    else{
        icone = '🌚';
    }
    
    
    
    texto.innerHTML = `Olá, ${nome}! Hoje é ${dia}, ${diaMes}/${mes}/${ano}. ${icone} ${hora}:${minuto}:${segundo}`

}


setInterval(function(){
  mensagem();
},1000)
 

