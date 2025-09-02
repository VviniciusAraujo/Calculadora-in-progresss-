const input = document.querySelector('input');

console.log(input)



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

//Butões de funções - Segundo passo feito
document.querySelectorAll('.op-key').forEach(operator_key => {
    operator_key.onclick = () => {
        const op = ['-', '/', '*', '+', '%'];
        const lastChar = input.value.slice(-1);
        const AtualOp = operator_key.innerText;
        if (op.includes(lastChar) && op.includes(AtualOp)){
            input.value = input.value.slice(0, -1) + AtualOp;
        } else {
            input.value = input.value !== '0' ? input.value + AtualOp : AtualOp;
        }}});

//Operação butão e resultado de cada um
const op_butao = document.querySelectorAll('.op-key')

op_butao.forEach( butao => {
    butao.addEventListener('click', () =>{
    const operator = butao.dataset.operator;
    console.log("Confirmação para realização da operação")    
    })

    switch (operator) {
        case 'adc':
            adicao =  input.value + input.value
            break;
    
        case 'sub':
            subtracao = input.value - input.value
            break;
    }
})