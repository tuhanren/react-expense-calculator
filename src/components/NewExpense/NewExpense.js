import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    //Add expense data to the expenses array
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* passing saveExpenseDataHandler through onSaveExpenseData pointer "SUPPER IMPORTANT!-Child to Parent component communication"*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* if something changed in ExpenseForm Component, onSaveExpenseData will be triggered */}
    </div>
  );
};

export default NewExpense;
