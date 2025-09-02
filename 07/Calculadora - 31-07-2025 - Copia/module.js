const input = document.querySelector('input');
//Função dos botoes primarios - Primeiro passo feito
document.querySelectorAll('.num-key').forEach(
    elemt_key => {
        elemt_key.onclick = () => input.value = input.value !== '0' ? input.value + elemt_key.innerText : elemt_key.innerText;

})
document.querySelector('.clear-key').onclick = () =>{
    input.value = 0;
    input.innerText = ' ';
}
document.querySelector('.del-key').onclick = () =>{
    input.value = input.value.slice(0,-1);
}

//Separador de funções - Segundo passo feito
document.querySelectorAll('.op-key').forEach(
    operator_key =>{
        operator_key.onclick = () => input.value = input.value !== '0' ? input.value + operator_key.innerText : operator_key.innerText;
    }
)