const range = document.getElementById('range');
const plength = document.getElementById('plength');
const plusBtn = document.querySelector('.plus__btn');
const minusBtn = document.querySelector('.minus__btn');
const password = document.querySelector('.password');
const upperCase = document.getElementById('upper__case');
const lowerCase = document.getElementById('lower__case');

plength.value = range.value;

const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYXZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|[]\/.,><~`'
let newPassWord = '';



console.log(charSet.length);




function generatePass(){
    const length = range.value;
    
    for(let i = 0; i<length; i++) {
        let index = Math.floor(Math.random() * charSet.length);
        console.log(index);
        newPassWord += charSet[index];
    }
    
    password.innerText = newPassWord;
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