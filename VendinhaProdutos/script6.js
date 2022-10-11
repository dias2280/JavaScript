/* Desenvolva uma maneira de obter um extrato individual de quantos itens foram vendidos.
 */
const controleCaixa = {
    Produtos: [],
    valorTotal: 0,
    despesas:0,
    lucro:0,
    listaVendas: {
        cachorroQuente:0,
        pizzaSuco:0,
        cocaNormal:0,
        cocaLigth:0,
        comboCachorro:0
    }
        
}

function menu(opcao){
    do{  
    alert("[1] - Cachorro quente 8R$\n"+
    "[2] - 2 Cachorro quente 15R$\n"+
    "[3] - 2 MiniPizza + Suco\n"+
    "[4] - CocaCola Ligth 10R$\n"+
    "[5] - CocaCola Normal 10R$\n"+
    "[6] - Calculo do lucro diario\n");

    opcao = parseInt(prompt("Informe a Opcao"))
    switch(opcao){
        case 1:
            console.log("Voce comprou um cachorro quente por 8");
            controleCaixa.Produtos.push("1 Cachorro = 8R$");
            controleCaixa.valorTotal = controleCaixa.valorTotal+8;
            controleCaixa.despesas = controleCaixa.despesas+4.50;
            controleCaixa.listaVendas.cachorroQuente++;
            break;
        case 2:
            console.log("Voce comprou 2 cachorro quente por 15");
            controleCaixa.Produtos.push("2 Cachorro = 15R$")
            controleCaixa.valorTotal = controleCaixa.valorTotal+15;
            controleCaixa.despesas = controleCaixa.despesas+9.00;
            controleCaixa.listaVendas.comboCachorro++;
            break;
        case 3:
            console.log("2 mini pizza + suco");
            controleCaixa.Produtos.push("2 mini Pizza + suco")
            controleCaixa.valorTotal = controleCaixa.valorTotal+20;
            controleCaixa.despesas = controleCaixa.despesas+10;
            controleCaixa.listaVendas.pizzaSuco++;
            break;
        case 4:
            console.log("Coca ligth 10R$");
            controleCaixa.Produtos.push("coca cola ligth")
            controleCaixa.valorTotal = controleCaixa.valorTotal+10;
            controleCaixa.despesas = controleCaixa.despesas+5;
            controleCaixa.listaVendas.cocaLigth++;
            break;
        case 5:
            console.log("Coca Normal 10R$");
            controleCaixa.Produtos.push("coca cola normal")
            controleCaixa.valorTotal = controleCaixa.valorTotal+10;
            controleCaixa.despesas = controleCaixa.despesas+5;
            controleCaixa.listaVendas.cocaNormal++;
            break;
        case 6:
            controleCaixa.lucro = controleCaixa.valorTotal-controleCaixa.despesas;
            console.log("seu lucro foi de "+controleCaixa.lucro)
    }
}while(opcao != 0);
}