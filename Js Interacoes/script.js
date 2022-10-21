let resultado = document.getElementById("identificacao1")
let resultado2 = document.getElementById("identificacao2")
let resultado3 = document.getElementById("identificacao3")
let resultado4 = document.getElementById("identificacao4")


function soma(n1,n2){
    resultado.innerText = n1+n2;
}
function divisao(n1,n2){
    resultado2.innerText = n1/n2;
}
function multiplicacao(n1,n2){
    resultado3.innerText = n1*n2;
}
function subtracao(n1,n2){
    resultado4.innerText = n1-n2;
}
function funcao(vet){
    let mudabotao = document.getElementById("botao")
     mudabotao.innerText=vet
}



