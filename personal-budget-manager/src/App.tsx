import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import BudgetAlert from './components/BudgetAlert';
import './styles.css'; // Import custom styles

interface Expense {
  amount: number;
  date: string;
  category: string;
}

const App: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const budgetLimit = 500;

  const addExpense = (expense: Expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h1 className="display-4">Personal Budget Manager</h1>
          <p className="lead">Track your expenses and manage your budget with ease</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h3>Add Expense</h3>
            <ExpenseForm onAddExpense={addExpense} />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h3>Expenses List</h3>
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h3>Expense Summary</h3>
            <ExpenseSummary expenses={expenses} />
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm p-3">
            <h3>Budget Alerts</h3>
            <BudgetAlert expenses={expenses} budgetLimit={budgetLimit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
