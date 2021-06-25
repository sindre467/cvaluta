const balance1 = document.getElementById('balance');
const moneyminus = document.getElementById('money-minus');
const moneyplus = document.getElementById('money-plus');
const list = document.getElementById('lists');
const form = document.getElementById('forms');
const text = document.getElementById('texts');
const amount = document.getElementById('amount');

const testTransactions = [
    { id: 1, text: 'xrp', amount: '' },
    { id: 2, text: 'bnb', amount: ''},
    { id: 3, text: 'bat', amount: ''},
    { id: 4, text: 'trx', amount: ''}, 
];
var transaction = testTransactions;