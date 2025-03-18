const range = document.getElementById('range');
const plength = document.getElementById('plength');
const plusBtn = document.querySelector('.plus__btn');
const minusBtn = document.querySelector('.minus__btn');
const password = document.querySelector('.password');
const upperCase = document.getElementById('upper__case');
const lowerCase = document.getElementById('lower__case');
const symbol = document.getElementById('symbol');
const number = document.getElementById('number');
const copyBtn = document.getElementById('copy__btn');
plength.value = range.value;

let charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYXZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|[]\/.,><~`';

function checkMark() {
    if(upperCase.checked && lowerCase.checked && number.checked && symbol.checked){
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYXZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|[]\/.,><~`';
    }
    else if(upperCase.checked && lowerCase.checked && number.checked){
        charSet ='ABCDEFGHIJKLMNOPQRSTUVWXYXZabcdefghijklmnopqrstuvwxyz0123456789';
    }
    else if(upperCase.checked && lowerCase.checked && symbol.checked){
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYXZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|[]\/.,><~`';
    }
    else if(upperCase.checked && number.checked && symbol.checked){
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYXZ!@#$%^&*()_+{}|[]\/.,><~`';
    }
    else if(lowerCase.checked && number.checked && symbol.checked){
        charSet = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|[]\/.,><~`';
    }
    else if(upperCase.checked && lowerCase.checked){
        charSet ='ABCDEFGHIJKLMNOPQRSTUVWXYXZabcdefghijklmnopqrstuvwxyz';
    }
    else if(upperCase.checked && number.checked){
        charSet ='ABCDEFGHIJKLMNOPQRSTUVWXYXZ0123456789';
    }
    else if(upperCase.checked && symbol.checked){
        charSet ='ABCDEFGHIJKLMNOPQRSTUVWXYXZ!@#$%^&*()_+{}|[]\/.,><~`';
    }
    else if(lowerCase.checked && number.checked) {
        charSet ='abcdefghijklmnopqrstuvwxyz0123456789';
    }
    else if(lowerCase.checked && symbol.checked) {
        charSet ='abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+{}|[]\/.,><~`';
    }
    else if(number.checked && symbol.checked) {
        charSet = '0123456789!@#$%^&*()_+{}|[]\/.,><~`';
    }
    else if(upperCase.checked){
        charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYXZ';
    }
    else if(lowerCase.checked){
        charSet = 'abcdefghijklmnopqrstuvwxyz';
    }
    else if(number.checked){
        charSet = '0123456789';
    }
    else if(symbol.checked){
        charSet = '!@#$%^&*()_+{}|[]\/.,><~`';
    }
   
    // generatePass();
}
checkMark();


console.log(charSet.length);

let newPassWord = '';



function generatePass(){
    const length = range.value;
    
    for(let i = 0; i<length; i++) {
        let index = Math.floor(Math.random() * charSet.length);
        console.log(index);
        newPassWord += charSet[index];
    }
    
    password.value = newPassWord;
    newPassWord='';
}

generatePass();


range.addEventListener('input', () => {
    plength.value = range.value;
    generatePass();
})

const plus = () => {
    range.value ++;
    plength.value = range.value;
    generatePass();
}
const minus = () => {
    range.value --;
    plength.value = range.value;
    generatePass();
}

function rangeNumber() {
    range.value = plength.value;
    generatePass();
}

function copy() {
    password.select();
    navigator.clipboard.writeText(password.value);
    
}