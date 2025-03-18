



const range = document.getElementById('range');
const lengthField = document.getElementById('lengthField');
const plength = document.getElementById('plength');
plength.innerText = range.value;



lengthField.value = range.value;
range.addEventListener('change', () => {
    
    
    lengthField.value = range.value;
    plength.innerText = range.value;
    
})