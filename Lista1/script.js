/* 1.	A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo 
recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela 
de hambúrguer. Sabendo que cada fatia de queijo ou presunto 
pesa 50 gramas, e que a rodela de hamburguer pesa 100 gramas, faça um 
algoritmo em que o dono forneça a quantidade de sanduiches a fazer, e a máquina 
informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra.  */

function calculoInsumos(quantidade){
let queijo=50;
let hamburguer=100;
let presunto=50;

quantidade = prompt("Informe a quantidade de lanches a ser feito");

let calculoQ = quantidade*(2*queijo)
let calculoP = quantidade*presunto;
let calculoH = quantidade*hamburguer;

console.log(calculoQ + " Gramas de Queijo \n" + calculoP+ 
"gramas de Presunto \n" + calculoH+ " Gramas de Hamburguer ");
}
/* 2.	Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit.
 Faça um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit 
 (pesquise como fazer este tipo de conversão).  */

 function conversaoTemp(celsius){

  celsius = prompt("Informe a Temperatura em Celsius")
   let farenheint = ((celsius*1.8)+32);
    console.log(farenheint + " Farenheints");

}

/* 3.	A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra.
Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário.
 Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos. */

 function calculoSalario(horasTrabalhadas){
    let normal = 10;
    let extra = 15;

    calculo = confirm("Voce esta fazendo hora extra?")
    horasTrabalhadas = prompt("Informe a quantidade de horas trabalhadas");
      if(calculo == false){
        let calculoNormal= horasTrabalhadas*normal;
        console.log(calculoNormal + " Salario Bruto para horas normais \n"+ calculoNormal*0.9 + "Salario Liquido para horas normais")
      }else if(calculo == true){
        let calculoExtra = horasTrabalhadas*extra;
        console.log(calculoExtra + " Salario Bruto para horas Extras \n"+ calculoExtra*0.9 + " Salario Liquido para horas Extras")
      }
      
 }

/*  4.	A granja Frangotech possui um controle automatizado de cada frango da sua produção. 
 No pé direito do frango há um anel com um chip de identificação; 
 no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. 
 Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo
  para calcular o gasto total da granja para marcar todos os seus frangos.  */

function frangoTech(quantidadeFrangos){
  let anelE =4.00;
  let anelA =3.50;

  quantidadeFrangos = prompt("Informe a quantiade de frangos");
  let precoAneis =(anelE+2*anelA);

console.log(precoAneis*quantidadeFrangos + " Reais em aneis para FrangoTech");

}

/* 5.	Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. 
Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa */

function confeccao(quantidadeBlusa,quantidadeNovelo){

  quantidadeBlusa = prompt("Informe a quantidade de blusas que foram produzidas");
  quantidadeNovelo = prompt("Informe a quantiade de novelos que foi utlizado ");
  let calculo = quantidadeBlusa/quantidadeNovelo;
  console.log(calculo+ " Blusas por Novelo ")
}

/* 6.	A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: 
lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra 
uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos
 litros de refrigerante ele comprou.  */

 function meiaCola(lata,garrafinha,garrafa){
  lata =prompt("Informe a quantiade de latas compradas")
  garrafinha=prompt("Informe a quantiade de garrafas 600 compradas")
  garrafa=prompt("Informe a quantiade de garrafas 2l compradas");

  let litros =(lata*350) + (garrafinha*600)+(garrafa*2000);
  console.log(litros/1000+ " Litros de refrigerante");

 }

/*  7.	Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar.
  Faça um algoritmo para ler a quantidade de cada tipo de moeda,
   e imprimir o valor total economizado, em reais. Considere que 
   existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. 
   Não havendo moeda de um tipo, a quantidade respectiva é zero.  */

   function contarMoedas(moeda1c,moeda5c,moeda10c,moeda25c,moeda50c,moeda1r){
    moeda1c=prompt("Informe a quantidade de moedas de 1 cent");
    moeda5c=prompt("Informe a quantidade de moedas de 5 cent");
    moeda10c=prompt("Informe a quantidade de moedas de 10 cent");
    moeda25c=prompt("Informe a quantidade de moedas de 25 cent");
    moeda50c=prompt("Informe a quantidade de moedas de 50 cent");
    moeda1r=prompt("Informe a quantidade de moedas de 1 Real");

    let valorTotal= (moeda1c*0.01) + (moeda5c*0.05) + (moeda10c*0.10) + (moeda25c*0.25) + (moeda50c*0.5) + (moeda1r*1);

    console.log(valorTotal);
   }

/*    8.	Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente
    longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre 
    da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio. */

    function calcularSombra(alturaPessoa,sombraPessoa,sombraPredio){
      alturaPessoa = prompt("Informe sua altura ");
      sombraPessoa = prompt("Informe a altura da sua sombra")
      sombraPredio = prompt("informe a altura sombra do predio");

      let alturaPredio= (alturaPessoa*sombraPredio)/(sombraPessoa);
      console.log(alturaPredio);
    }

/*     9.	Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá.
     Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco
      (informados pelo usuário).  */

      function refresco(litrosRefresco){
        litrosRefresco = parseInt(prompt("Informe a quantidade de litros de refresco"));
        let agua = litrosRefresco*0.8;
        let suco = litrosRefresco*0.2;
        console.log(agua +" Litro de agua \n"+ suco + " Litros de Suco concentrado de maracuja");
      }

      /* 10.	Calcule o volume de uma caixa d'água cilíndrica.  */

      function litroCilindrico(raio,altura){
        raio=prompt("Informe o Raio da caixa de agua");
        altura=prompt("Informe a altura da caixa");

        let volumeAgua=3.14*(raio*raio)*altura;
        console.log(volumeAgua + "M2 de agua");
      }

/*       11.	Faça um algoritmo que receba três números, calcule e mostre a multiplicação desses números.  */
      function multiplicacao(numero,numero2,numero3){
        numero = prompt("Informe um numero");
        numero2 = prompt("Informe um numero");
        numero3 = prompt("Informe um numero");

       resultado = numero*numero2*numero3;
       console.log("a multiplicado dos numeros : "+resultado);
      }

/*       12.	Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo. 
Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações. */
      function divisao(num,num2){
        num = prompt("Informe o primeiro numero da divisao");
        num2 = prompt("Informe o Segundo numero da divisao");
        console.log((num/num2) +" Resultado da divisao do primeiro pelo segundo numero");
      }

/*       13.	Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas,
       considerando peso 2 para a primeira nota e peso 3 para a segunda nota. */
       function calculoMedia(nota1,nota2){
        nota1 = prompt("Informe sua Primeira nota");
        nota2 = prompt("Informe a segunda nota");
        let ponderada = nota1*2 + nota2*3;
        console.log(ponderada/6 + " Nota ponderada")
       }

       /* 14.	Faça um algoritmo que receba o preço de um produto, calcule e mostre o novo preço, 
       sabendo-se que este sofreu um desconto de 10%.  */
       
       function descontoProduto(precoProduto){
        precoProduto=prompt("informe o Valor do produto");
        console.log(precoProduto*0.9 + " Preco atualizado com 10% de desconto")
       }

/*        15.	Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas.
       Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas,
        calcule e mostre a comissão e o salário final do funcionário.  */
        function salarioRepresentante(salarioFixo,totalVendas){
          salarioFixo = parseInt(prompt("Informe o salario fixo do vendedor"));
          totalVendas = parseInt(prompt("Informe o total de vendas"));
          let calculo = salarioFixo+(totalVendas*0.04);
          console.log(calculo + " Salario com a comissao");
        }

      /*   16.	Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
              a)	o novo peso se a pessoa engordar 15% sobre o peso digitado;
              b)	o novo peso se a pessoa emagrecer 20% sobre o peso digitado. */ 

              function calculoPeso(pesoAtual){
                pesoAtual = parseInt(prompt("Informe o pesoa atual"));
                let calculoEn = pesoAtual*0.15+pesoAtual
                let calculoEm = pesoAtual*0.8
                console.log(calculoEn+" KG Caso engorde 15% \n" + calculoEm+" KG caso emagreca 20%");
              }

          /* 17.	Faça um algoritmo que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas.  */
              function pesoGramas(pesoPessoa){
                pesoPessoa=parseInt(prompt("informe o peso atual em KG"));
                console.log(pesoPessoa*1000 + " Gramas ");
              }

              /* 18.	Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2 ;  */
              function areaTrapezio(baseMaior,baseMenor,altura){
                baseMaior=parseFloat(prompt("Informe a base maior"));
                baseMenor=parseFloat(prompt("Informe a base menor"));
                altura=parseFloat(prompt("Informe a altura"));

                let calculo = ((baseMaior+baseMenor)*altura)/2;
                console.log(calculo);
              }

             /*  19.	Faça um algoritmo que calcule e mostre a área de um quadrado. Sabe-se que: A = lado * lado;  */
             function areaQuadrado(lado){
              lado=parseFloat(prompt("Informe o Tamanho do lado"));
              let calculo = lado*lado;
              console.log(calculo);
             }

            /*  20.	Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diagonal_menor)/2;  */
            function calculoLosango(diagonalMaior,diagonalMenor){
              diagonalMaior=parseFloat(prompt("Informe a Diagonal Maior"));
              diagonalMenor=parseFloat(prompt("Informe a diagonal menor"));
              let calculo = (diagonalMaior*diagonalMenor)/2;
              console.log(calculo);
            }
/* 
            21.	Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, calcule e mostre a quantidade 
            de salários mínimos que ganha esse funcionário. */ 

            function calculoSalarioMinimo(salarioFuncionario,salarioMinimo){
              salarioFuncionario=parseFloat(prompt("Informe seu salario"));
              salarioMinimo=parseFloat(prompt("Informe o valor do salario minimo"));
              let calculo=salarioFuncionario/salarioMinimo;
              console.log=(calculo);
            }


            /* 22.	Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário */
            function taboada(numero){
              numero = parseInt(prompt("Informe um numero da taboada"));
              for(let i=1;i<11;i++){
                let numeroT =numero*i;
                console.log(i+"*"+numero+" = "+numeroT);
              }
            }

/*             23.	Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
                  a)	a idade dessa pessoa em anos;
                  b)	a idade dessa pessoa em meses; 
                  c)	a idade dessa pessoa em dias
                  d)	a idade dessa pessoa em semanas.  */
                function calculoAnos(anoNascimento,anoAtual){
                  anoNascimento = parseInt(prompt("Informe o Ano de nascimento"));
                  anoAtual = parseInt(prompt("Informe o ano Atual"));

                  let emAnos = anoAtual-anoNascimento;
                  let emMeses =(anoAtual-anoNascimento)*12;
                  let emDias = (anoAtual-anoNascimento)*365;
                  let emSemanas = parseInt(emDias/7);
                  console.log(emAnos + " Anos");
                  console.log(emMeses + " Meses");
                  console.log(emDias + " Dias");
                  console.log(emSemanas + " semanas");
                }
/* 
                24.	João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) 
                que estão atrasadas. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta.
                 Faça um algoritmo que calcule e mostre quanto restará do salário do João. */
                function contasAtrasadas(salarioJoao){
                  salarioJoao=parseFloat(prompt("Informe seu salario joao"));
                  let c1 = (200*0.02)+200;
                  let c2=(120*0.02)+120;
                  console.log(salarioJoao-(c1+c2)+"R$ Sobrara do seu salario ");
                }
