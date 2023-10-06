import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./ExpenseForm.css";

function ExpenseForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    type: "expense",
    name: "",
    amount: "",
    date: "",
    source: "Shopping",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTransaction = () => {
    const { name, amount, date, source } = formData;

    if (name && amount && date && source) {
      const newTransaction = {
        ...formData,
        amount: parseFloat(formData.amount),
      };
      onAddTransaction(newTransaction);
      setFormData({
        type: "expense",
        name: "",
        amount: "",
        date: "",
        source: "",
      });
    }
  };

  const expenseCategoryOptions = [
    "Shopping",
    "Fuel",
    "Travel",
    "Food",
    "Salary",
  ];
  const incomeCategoryOptions = ["Salary", "Trading", "Youtube", "Other"];

  const categoryOptions =
    formData.type === "expense"
      ? expenseCategoryOptions
      : incomeCategoryOptions;

  return (
    <div className="expense-form-container">
      <div className="expense-form">
        <h2 style={{ textAlign: "center" }}>Add Transaction</h2>
        <form>
          <label>
            Transaction Type:
            <select
              value={formData.type}
              onChange={handleInputChange}
              name="type"
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </label>
          <label>
            Name:
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              name="name"
            />
          </label>
          <label>
            Amount:
            <input
              type="number"
              value={formData.amount}
              onChange={handleInputChange}
              name="amount"
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              name="date"
            />
          </label>
          <label>
            Category:
            <Dropdown
              options={categoryOptions}
              selectedValue={formData.source}
              onChange={handleInputChange}
              name="source"
            />
          </label>
          <button type="button" onClick={handleAddTransaction}>
            Add Transaction
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
