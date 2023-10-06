/* eslint-disable react/prop-types */
import React from "react";
import "./ExpenseList.css";

export const Stats = ({ transactions }) => {
  const totalMoneyIn = transactions.reduce((total, transaction) => {
    if (transaction.type === "income") {
      return total + parseFloat(transaction.amount);
    }
    return total;
  }, 0);

  const totalMoneyOut = transactions.reduce((total, transaction) => {
    if (transaction.type === "expense") {
      return total + parseFloat(transaction.amount);
    }
    return total;
  }, 0);
  const balance = totalMoneyIn - totalMoneyOut;

  return (
    <div className="totals">
      <h2>Stats</h2>
      <h3>Total Money In: ${totalMoneyIn.toFixed(2)}</h3>
      <h3>Total Money Out: ${totalMoneyOut.toFixed(2)}</h3>
      <h3>Balance: ${balance.toFixed(2)}</h3>
    </div>
  );
};

// function ExpenseList({ transactions }) {
//   return (
//     <div className="table-container">
//       <div className="expense-list-container">
//         {/* <Stats transactions={transactions} />
//         <ExpenseTable transactions={transactions} /> */}
//       </div>
//     </div>
//   );
// }

// export default ExpenseList;

export const ExpenseTable = ({ transactions }) => {
  return (
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
            <ExpenseRow key={index} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ExpenseRow = ({ transaction }) => (
  <tr>
    <td>{transaction.name}</td>
    <td>${transaction.amount}</td>
    <td>{transaction.date}</td>
  </tr>
);
