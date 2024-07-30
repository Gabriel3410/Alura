alert('Boas vindas ao meu site!');


let nome  = 'Lua';

let idade = 18;

let numeroDeVendas = 50;

let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';

let nomeUsuario = prompt('Qual seu nome');

let idadeUsuario = prompt('Qual a sua idade');


if(idadeUsuario == idade){
    alert('Boa noticia '+ nomeUsuario +', pode tirar a habilitação');
}else{
    alert('Você não tem a idada para tirar a habilitação');
}