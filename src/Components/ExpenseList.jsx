import React from 'react';
import './ExpenseList.css';

function ExpenseList({ transactions }) {
    
    const totalMoneyIn = transactions.reduce((total, transaction) => {
        if (transaction.type === 'income') {
            return total + parseFloat(transaction.amount);
        }
        return total;
    }, 0);

    const totalMoneyOut = transactions.reduce((total, transaction) => {
        if (transaction.type === 'expense') {
            return total + parseFloat(transaction.amount);
        }
        return total;
    }, 0);

    const balance = totalMoneyIn - totalMoneyOut;

    return (
        <div className="expense-list">
            <h2>Expense List</h2>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.name}: ${transaction.amount} ({transaction.date})
                    </li>
                ))}
            </ul>
            <p>Total Money In: ${totalMoneyIn.toFixed(2)}</p>
            <p>Total Money Out: ${totalMoneyOut.toFixed(2)}</p>
            <p>Balance: ${balance.toFixed(2)}</p>
        </div>
    );
}

export default ExpenseList;