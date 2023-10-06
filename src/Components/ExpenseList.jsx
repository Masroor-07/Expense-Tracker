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
        <div className="expense-list-container">
            <div className="totals">
                <h1>Expense List</h1>
                <h2>Total Money In: ${totalMoneyIn.toFixed(2)}</h2>
                <h2>Total Money Out: ${totalMoneyOut.toFixed(2)}</h2>
                <h2>Balance: ${balance.toFixed(2)}</h2>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Amount</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td>{transaction.name}</td>
                                <td>${transaction.amount}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ExpenseList;