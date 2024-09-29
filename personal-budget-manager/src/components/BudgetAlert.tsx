import React from 'react';

interface Expense {
  amount: number;
}

interface BudgetAlertProps {
  expenses: Expense[];
  budgetLimit: number;
}

const BudgetAlert: React.FC<BudgetAlertProps> = ({ expenses, budgetLimit }) => {
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    totalExpenses >= budgetLimit ? (
      <div className="alert alert-danger">
        Warning: You are nearing your budget limit!
      </div>
    ) : (
      <div className="alert alert-success">
        You are within your budget.
      </div>
    )
  );
};

export default BudgetAlert;
