
 function updateValues() {
     const amounts = transaction.map(transaction => transaction.amount);
     const total = amounts.reduce((acc, item) (acc += item), 0).toFixed(2);

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
    list.innerHTML = undefined;
    transaction.forEach(addTransactionDOM);
   
}
show();

