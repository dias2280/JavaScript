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