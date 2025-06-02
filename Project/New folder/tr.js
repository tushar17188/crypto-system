const transactionsContainer = document.getElementById('transactions');
const generateBtn = document.getElementById('generateBtn');

const generateRandomTransaction = () => {
    const transactionId = Math.floor(Math.random() * 10000);
    const amount = (Math.random() * 1000).toFixed(2);
    const date = new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString();
    const status = Math.random() > 0.5 ? 'Completed' : 'Pending';

    return { transactionId, amount, date, status };
};

const displayTransactions = (num) => {
    transactionsContainer.innerHTML = '';
    for (let i = 0; i < num; i++) {
        const transaction = generateRandomTransaction();
        const transactionDiv = document.createElement('div');
        transactionDiv.className = 'transaction';
        transactionDiv.innerHTML = `
            <h3>Transaction ID: ${transaction.transactionId}</h3>
            <p>Amount: $${transaction.amount}</p>
            <p>Date: ${transaction.date}</p>
            <p>Status: ${transaction.status}</p>
        `;
        transactionsContainer.appendChild(transactionDiv);
    }
};

generateBtn.addEventListener('click', () => displayTransactions(5));
