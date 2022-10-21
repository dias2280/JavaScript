/* Funcoes Enjetoras */
function declararNome(){
    this.nome = prompt("Digite o nome da nave");
    return this.nome;
}

function declaraTripulantes(){
    this.tripulantes = parseInt(prompt("Digite a quantidade de tripulantes"));
    return this.tripulantes;

}
function declararEngate(){
    this.engatar = confirm("Deseja engatar a nave");
    return this.engatar;
}
function mostrarLista(listaNaves){
    console.log(listaNaves)
}
/* CLASSE */
class criadorNaves{
    constructor(nome,tripulantes,engatar){
        this.nome = nome;
        this.tripulantes = tripulantes;
        this.engatar = engatar;
    }
}

const listaNaves = [];
let nave3 ;
function criarNave(){  
     nave3 = new criadorNaves(declararNome(),declaraTripulantes(),declararEngate());
    listaNaves.push(nave3.nome);
    return nave3;

}

