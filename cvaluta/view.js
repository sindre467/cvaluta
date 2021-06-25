//mangler innhold fradata.html 
function addTransactionDOM(transaction) {
    item.innerHTML = `
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}
   </span><button class="delete-btn">x</button>
    const sign = transaction.amount < 0 ? '-' : '+';
    const item = document.createElement('li');
    item.add(transaction.amount < 0 ? '-' : '+');
    `; 
    list.appendChild(item);

}