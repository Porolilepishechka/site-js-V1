const firstnum = document.getElementById('a')
const lastnum = document.getElementById('b')
const submitBtn = document.getElementById('submit')
const resultElement = document.getElementById('result')
const operation_plu = document.getElementById('operation_plu')
const operation_min = document.getElementById('operation_min')
const operation_mno = document.getElementById('operation_mno')
const operation_dil = document.getElementById('operation_dil')
let sum = 0
let action = '+'


operation_plu.onclick = function() {
    action = '+'
}

operation_min.onclick = function() {
    action = '-'
}

operation_mno.onclick = function() {
    action = '*'
}

operation_dil.onclick = function() {
    action = '/'
}

submitBtn.onclick = function() {

    switch (action) {
        case "+":
            sum = Number(firstnum.value) + Number(lastnum.value)
            resultElement.textContent = sum
        break;
        case "-":
            sum = Number(firstnum.value) - Number(lastnum.value)
            resultElement.textContent = sum
        break;
        case "*":
            sum = Number(firstnum.value) * Number(lastnum.value)
            resultElement.textContent = sum
        break;
        case "/":
            sum = Number(firstnum.value) / Number(lastnum.value)
            resultElement.textContent = sum
        break;
    }
}
