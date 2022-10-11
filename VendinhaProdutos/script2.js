/* 2 – Adicione itens para vender nesta cantina!
Crie alguns itens que poderão ser vendidos. Cada um com uma promoção imperdível.
Estes novos produtos deverão também estar presentes no menu interativo
Lembre-se, cada item vendido deverá ir para uma lista.*/

const controleCaixa = {
    Produtos: [],
    valorTotal: 0
}

function menu(opcao){
    do{  
    alert("1 - Cachorro quente 8R$\n"+
    "2 - 2 Cachorro quente 15R$\n"+
    "4 - 2 MiniPizza + Suco\n"+
    "4 - CocaCola Ligth 10R$\n"+
    "5 - CocaCola Normal 10R$\n");

    opcao = parseInt(prompt("Informe a Opcao"))
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
        case 3:
            console.log("2 mini pizza + suco");
            controleCaixa.Produtos.push("2 mini Pizza + suco")
            controleCaixa.valorTotal = controleCaixa.valorTotal+20;
            break;
        case 4:
            console.log("Coca ligth 10R$");
            controleCaixa.Produtos.push("coca cola ligth")
            controleCaixa.valorTotal = controleCaixa.valorTotal+10;
            break;
        case 5:
            console.log("Coca Normal 10R$");
            controleCaixa.Produtos.push("coca cola normal")
            controleCaixa.valorTotal = controleCaixa.valorTotal+10;
            break;
    }
}while(opcao != 0);
}