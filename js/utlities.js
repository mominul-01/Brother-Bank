
function getInputValueField(inputId) {

    const inputField = document.getElementById(inputId);
   
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);

    inputField.value = '';

    return inputFieldValue;   
}


function getElementValueById(elementId) {
    
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldString);

    return elementFieldValue;
}


function setTextElementValueById(elementId, newValue) {
    
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}