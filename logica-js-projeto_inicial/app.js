alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 2;
console.log (numeroSecreto);

let chute = prompt('Me diga um número de 1 a 30');

// se o chute for igual ao número secreto 
if(numeroSecreto == chute){
    alert('Isso ai você descobriu o Número secreto ' + numeroSecreto)
    // outro exemplo de concatenação
    // alert (`Isso ai, você descobriu o número secreto ${numeroSecreto}`)
}else{
    alert('Você errou')
}


