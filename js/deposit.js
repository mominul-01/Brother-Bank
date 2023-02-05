
//This work for deposit system

document.getElementById('btn-deposit').addEventListener('click', function () {
    
    //get the input deposit
    const newDepositAmount = getInputValueField('deposit-input-filed');
    
    //here check the input is valid or not
    if (isNaN(newDepositAmount)) {
        alert('Enter the number value');
        return
    }

    // get the prevuous Deposit Amount
    const previuousDepositAmount = getElementValueById('deposit-amount')
    // calculate the previuous and new value of deposit
    const currentDepositTotal = previuousDepositAmount + newDepositAmount;
    // set the deposit value as the currentdeposittotal amount
    setTextElementValueById('deposit-amount', currentDepositTotal);

    //get the previous balance amount 
    const previousBalanceAmount = getElementValueById('balance-amount');

    // calculate the current deposit and previous balance
    const currentBalance = previousBalanceAmount + currentDepositTotal;

    // set the currentBalance 
    setTextElementValueById('balance-amount', currentBalance);

})