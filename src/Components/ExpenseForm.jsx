import React, { useState } from 'react';
import Dropdown from './Dropdown'; 
import './ExpenseForm.css';

function ExpenseForm({ transactions, setTransactions }) {
    const [type, setType] = useState('expense');
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [source, setSource] = useState(type==='income'? 'Salary' : 'Shopping');

    const handleAddTransaction = () => {
        if (name && amount && date && source) {
            const newTransaction = { type, name, amount, date, source };
            setTransactions([...transactions, newTransaction]);
            setName('');
            setAmount('');
            setDate('');
            setSource('');

            localStorage.setItem('transactions',Json.stringify([...transactions,newTransaction]));
        }
    };
    

    return (
        <div className="expense-form">
            <h2>Add Transaction</h2>
            <form>
                <label>
                    Transaction Type:
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                </label>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
                <label>
                    Date:
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                {type === 'income' ? (
                    <label>
                        Income Source:
                        <Dropdown options={['Salary', 'Trading', 'Utube', 'Other']} selectedValue={source} onChange={(e) => setSource(e.target.value)} />
                    </label>
                ) : (
                    <label>
                        Expense Type:
                        <Dropdown options={['Shopping', 'Rent', 'Travel', 'Food', 'Other']} selectedValue={source} onChange={(e) => setSource(e.target.value)} />
                    </label>
                )}
                <button type="button" onClick={handleAddTransaction}>
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default ExpenseForm;