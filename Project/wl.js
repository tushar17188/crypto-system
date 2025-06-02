document.getElementById('add-button').addEventListener('click', function() {
    const amountInput = document.getElementById('amount-input');
    const balanceAmount = document.getElementById('balance-amount');

    const amountToAdd = parseFloat(amountInput.value);
    if (!isNaN(amountToAdd) && amountToAdd > 0) {
        const currentBalance = parseFloat(balanceAmount.innerText.replace('$', ''));
        const newBalance = currentBalance + amountToAdd;
        balanceAmount.innerText = `$${newBalance.toFixed(2)}`;
        amountInput.value = ''; // Clear input field
    } else {
        alert('Please enter a valid amount.');
    }
});