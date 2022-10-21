function mudaBotao(){
    let botao = document.getElementById("botao1");
    botao.innerText = "Botao Dois"
}

function mudarNome(){
    let texto = document.getElementById("mudarNome2");
    texto.innerText = prompt("digite seu nome");
}

function mandarAlerta(){
     mandarAlerta = document.getElementById("mandarAlerta").value
    alert(mandarAlerta)
}

function validacaoCpf(){
    let verificacao;
    let cpfElement = document.getElementById("cpf").value
    if(cpfElement.length == 11){
       verificacao = window.confirm("CPF Valido, Confirme seu cpf :"+ cpfElement)
        if(verificacao == false){
            alert("Operacao Cancelada")
        }else if(verificacao == true){
            alert("CPF Valido")
        }
       }else if(cpfElement.length != 11){
        alert("Cpf informado nao possui 11 digitos")
       }
    }