function calcular() {
    var pizzaCalabresa = document.querySelector('#pizza_calabresa').selected;
    var qtd = document.querySelector('#qtd').value;//para var string
    var total = 0;

    if (pizzaCalabresa) {
        return total = 25 * qtd;
    } else {
        return total = 30 * qtd;
    }

}



function setPrecoText() {
    var total = document.querySelector('#total');
    total.innerHTML = 'Total R$' + calcular();
    setPizzaImg();

}

function setPizzaImg() {
    var pizzaCalabresa = document.querySelector('#pizza_calabresa').selected;
    var img = document.querySelector('#img_pizzas');


    if (pizzaCalabresa) {
        img.src = "imagens/calabresa.jpg";


    } else {
        img.src = "imagens/quatro_queijos.jpg";


    }
}

function mensagem() {
    var qtd = document.querySelector('#qtd').value
    var pizzaCalabresa = document.querySelector('#pizza_calabresa').selected
   
    if (pizzaCalabresa) {
        if (qtd > 1) {
            return `Obrigada por comprar: ${qtd} pizzas de calabresa!`;
    /*esta vindo direto para o else... como resolver?
    era o value que estava escrito no lugar errado e a ausencia da var qtd no escopo dessa function */
        } else {
            return `Obrigada por comprar: ${qtd} pizza de calabresa!`;
        }
    }
    else{
        if(qtd > 1){
            return `Obrigada por comprar: ${qtd} pizzas de quatro queijos!`;           
        }else {
            return `Obrigada por comprar: ${qtd} pizza de quatro queijos!`;
        }
    }

}
function setMens() {
    var msg = document.querySelector('#msg')
    msg.innerHTML = mensagem()
}