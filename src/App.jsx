/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import { ExpenseTable, Stats } from "./Components/ExpenseList";
import ExpenseForm from "./Components/ExpenseForm";
import LogIn from "./Components/LogIn";

const Home = ({ transactions, handleAddTransaction }) => {
  return (
    <div
      style={{
        display: "flex",
        // flexDirection: "column",
        gap: "25px",
      }}
    >
      <ExpenseForm onAddTransaction={handleAddTransaction} />
      <Stats transactions={transactions} />
      <ExpenseTable transactions={transactions} />
    </div>
  );
};

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (savedTransactions) {
      setTransactions(savedTransactions);
    }
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);

    localStorage.setItem(
      "transactions",
      JSON.stringify([...transactions, newTransaction])
    );
  };

  return (
    <>
      <div className="App">
        <Header />
        <div>
          {isLoggedIn ? (
            <Home
              transactions={transactions}
              handleAddTransaction={handleAddTransaction}
            />
          ) : (
            <LogIn onLogin={() => setIsLoggedIn(true)} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
