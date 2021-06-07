const balance1 = document.getElementById('balance');
const moneyminus = document.getElementById('money-minus');
const moneyplus = document.getElementById('money-plus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const testTransactions = [
    { id: 1, text: 'xrp', amount: '' },
    { id: 2, text: 'bnb', amount: ''},
    { id: 3, text: 'bat', amount: ''},
    { id: 4, text: 'trx', amount: ''}, 
];
var transaction = testTransactions;

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');
    item.add(transaction.amount < 0 ? '-' : '+');

     item.innerHTML = `
     ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}
    </span><button class="delete-btn">x</button>

    `;
    list.appendChild(item);

}
 function updateValues() {
     const amounts = transaction.map(transaction => transaction.amount);
     const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

     const income = amounts.filter(item => item > 0)
     .reduce((acc, item), 0 > (acc += item), 0).toFixed(2);

    const expense = ((amounts.filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1).toFixed(2));

    balance1.innerText = `$${total}`;
    money_plus.innerText= `$${total}`;
    money_minus.innerText= `$${total}`;
     updateValues();
    }

function show() {
    list.innerHTML = '';
    transaction.forEach(addTransactionDOM);
   
}
show();
