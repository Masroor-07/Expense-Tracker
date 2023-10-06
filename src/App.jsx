import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import ExpenseList from './Components/ExpenseList';
import ExpenseForm from './Components/ExpenseForm';
import LogIn from './Components/LogIn'


function App() {
    const [transactions, setTransactions] = useState([]);
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    useEffect(() => {
    
        const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
        if (savedTransactions) {
            setTransactions(savedTransactions);
        }
    }, []);

    const handleAddTransaction = (newTransaction) => {
        
        setTransactions([...transactions, newTransaction]);

        
        localStorage.setItem('transactions', JSON.stringify([...transactions, newTransaction]));
    };

    return (
        <>
        <div className="App">
            <Header />
            <div>
            {isLoggedIn ? (
                <>
                <div className="expense-form-container">
                <ExpenseForm onAddTransaction={handleAddTransaction} />
            </div>
            <div className='table-container'>
            <ExpenseList transactions={transactions} />

            </div>
                

            
            </>

            
            ) : (
                
                <LogIn onLogin={() => setIsLoggedIn(true)} />
            )}
            </div>
            
            
        
                
            
            
        </div>
        </>

        
    );
}

export default App;