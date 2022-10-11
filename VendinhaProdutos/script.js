/* Por mais que seja uma lista “sequencial”, cada resolução deverá estar em um arquivo diferente. 

1 – Você é o dono da cantina e deseja iniciar a venda de cachorro quentes.
Um cachorro quente custa R$8,00. Se comprar dois, fica R$15,00 (oportunidade de ouro).
Faça um algoritmo que receba um pedido nesta cantina;
Você deve adicionar uma lista de produtos que já foram vendidos;
Você deve criar um controle de caixa, para ver quanto entrou de dinheiro; */

const controleCaixa = {
    Produtos: [],
    valorTotal: 0
}

function menu(opcao){
    do{  
    alert("1 Cachorro 8R$ \n 2 Cachoro 15R$ \n 0-Sair");
    opcao = parseInt(prompt("Informe a Opcao"));
    switch(opcao){
        case 1:
            console.log("Voce comprou um cachorro quente por 8");
            controleCaixa.Produtos.push("1 Cachorro = 8R$");
            controleCaixa.valorTotal = controleCaixa.valorTotal+8;
            break;
        case 2:
            console.log("Voce comprou 2 cachorro quente por 15");
            controleCaixa.Produtos.push("2 Cachorro = 15R$")
            controleCaixa.valorTotal = controleCaixa.valorTotal+15;
            break;
    }
}while(opcao != 0);
}



