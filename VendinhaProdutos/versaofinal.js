/*7 – Bonus Roud – Crie uma tabela no console com todos os dados de venda de cada produto. 
 */
const controleCaixa = {
    Produtos: {
        cachorroQuente:{
            qnt:0,
            valor:0,
        },
        pizzaSuco:{
            qnt:0,
            valor:0,
        },
        cocaNormal:{
            qnt:0,
            valor:0,
        },
        cocaLigth:{
            qnt:0,
            valor:0,
        }
    },
        despesasTotal:0,
        lucro:0,
        lista:[],
    }

function menu(opcao){
    do{  
    alert("[1] - Cachorro quente 8R$\n"+
    "[2] - 2 Cachorro quente 15R$\n"+
    "[3] - 2 MiniPizza + Suco 15R$\n"+
    "[4] - CocaCola Ligth 10R$\n"+
    "[5] - CocaCola Normal 10R$\n"+
    "[6] - Calculo do lucro diario\n");

    opcao = parseInt(prompt("Informe a Opcao"))
    switch(opcao){
        case 1:
            console.log("Voce comprou um cachorro quente por 8");
            controleCaixa.lista.push("1 Cachorro = 8R$");
            controleCaixa.Produtos.cachorroQuente.qnt++;
            controleCaixa.Produtos.cachorroQuente.valor+=8;
            controleCaixa.Produtos.despesasTotal+=4.50;
            break;
        case 2:
            console.log("Voce comprou 2 cachorro quente por 15");
            controleCaixa.lista.push("2 Cachorro = 15R$")
            controleCaixa.Produtos.cachorroQuente.qnt+=2;
            controleCaixa.Produtos.cachorroQuente.valor+=15;
            controleCaixa.Produtos.despesasTotal=+9;
            break;
        case 3:
            console.log("2 mini pizza + suco");
            controleCaixa.lista.push("2 mini Pizza + suco");
            controleCaixa.Produtos.pizzaSuco.qnt+=1;
            controleCaixa.Produtos.pizzaSuco.valor+=15;
            controleCaixa.Produtos.despesasTotal+=9;
            break;
        case 4:
            console.log("Coca ligth 10R$");
            controleCaixa.lista.push("coca cola ligth");
            controleCaixa.Produtos.cocaLigth.qnt+=1;
            controleCaixa.Produtos.cocaLigth.valor+=10;
            controleCaixa.Produtos.despesasTotal+=3;
            break;
        case 5:
            console.log("Coca Normal 10R$");
            controleCaixa.lista.push("coca cola normal");
            controleCaixa.Produtos.cocaNormal.qnt+=1;
            controleCaixa.Produtos.cocaNormal.valor+=10;
            controleCaixa.Produtos.despesasTotal+=3;
            break;
        case 6:
            controleCaixa.lucro = (controleCaixa.Produtos.cachorroQuente.valor+controleCaixa.Produtos.cocaLigth.valor+controleCaixa.Produtos.cocaNormal.valor+controleCaixa.Produtos.pizzaSuco.valor)-controleCaixa.Produtos.despesasTotal;
            console.log("seu lucro foi de "+controleCaixa.lucro)
        case 0:
            console.table(controleCaixa.Produtos)
            return 0;
    }
}while(opcao != 0);
}