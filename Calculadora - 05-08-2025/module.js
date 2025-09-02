const input = document.querySelector('input')

function attDisplay(x){
    input.value = x;
}

document.querySelectorAll('.num-key').forEach(
    elemt_key => {
        elemt_key.onclick = () => input.value = input.value !== '0' ? input.value + elemt_key.innerText : elemt_key.innerText;

})
document.querySelector('.clear-key').onclick = () =>{
    attDisplay(" ")
}
document.querySelector('.del-key').onclick = () =>{
    input.value = input.value.slice(0,-1);
}
document.querySelector('.eq-key').onclick = () =>{
    attDisplay(eval(`${(input.value).replace("=", "")}`))
}

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

document.addEventListener("keyup", e=>{
    if(e.key == "="){
        attDisplay(eval(`${(input.value).replace("=", "")}`));
    }
});