import React from 'react';

function Transactions() {
  const transactions = [
    { id: 1, description: 'Grocery', amount: -20 },
    { id: 2, description: 'Salary', amount: 1000 },
    { id: 3, description: 'Book', amount: -15 }
  ];

  return (
    <div>
      <h1>Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
