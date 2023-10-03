import React, { useState, useEffect } from 'react';
import './App.css'; 
import Header from './Components/Header';
import ExpenseList from './Components/ExpenseList';
import ExpenseForm from './Components/ExpenseForm';

function App() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        
        const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
        setTransactions(savedTransactions);
    }, []);

    useEffect(() => {
        
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    return (
        <div className="App">
            <Header />
            <div className="expense-form-container"></div>
            <ExpenseForm transactions={transactions} setTransactions={setTransactions} />
            <ExpenseList transactions={transactions} />
        </div>
    );
}

export default App;