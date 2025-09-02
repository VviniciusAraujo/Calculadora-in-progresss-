var display = document.getElementById("display");
var ListrBtn = []

ListrBtn.push(document.getElementById("num-key"));
ListrBtn.push(document.getElementById("op-key"));

var Clear = document.getElementById("clear-key");
var Equality = document.getElementById("eq-key");
var Del = document.getElementById("del-key");
var PointerCount = 0;
var pointLimit = 1;

//Primeiro passo: Outros botoes - Mais facil
Equality.onclick = () =>{
    ResultCau();
    console.log("Butao clicado com sucesso")

}
Del.onclick = () => {
    DelLastDig();
    console.log("Butao clicado com sucesso")
}
function DelLastDig(value){
    this.display[this.display.length-1] = value
}
Clear.onclick = () => {
    display.value = ''
    PointerCount = 0;
    console.log("Butao clicado com sucesso")
}

document.querySelectorAll('num_key')

//Primeiro meio passo: Criar função dos botoes primarios


//Segundo passo: Operações


//Terceiro - ?? Passo: Numero, operações e afins
