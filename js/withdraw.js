
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //get the withdraw input

    const newWithdrawAmount = getInputValueField('withdraw-input-filed');
    //here check the input is valid or not 
    if (isNaN(newWithdrawAmount)) {
        alert('Enter the number value');
        return
    }
    // get the previous withdraw Value
    const previousWithdrawAmount = getElementValueById('withdraw-amount');

    //culculting the currentwithdraw Value
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    //set withdraw value 
    setTextElementValueById('withdraw-amount', currentWithdrawAmount)

    //get previous balance 
    const preBanlaceAmount = getElementValueById('balance-amount');

    //new Balance amount
    const newBalanceAmount = preBanlaceAmount - currentWithdrawAmount;

    //set new balance 
    setTextElementValueById('balance-amount', newBalanceAmount);
    

})