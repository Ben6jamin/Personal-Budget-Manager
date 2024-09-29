import React from 'react';

interface Expense {
  amount: number;
  date: string;
  category: string;
}

interface ExpenseListProps {
  expenses: Expense[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => (
  <ul className="list-group">
    {expenses.length === 0 ? (
      <li className="list-group-item">No expenses found.</li>
    ) : (
      expenses.map((expense, index) => (
        <li key={index} className="list-group-item">
          {expense.date} - {expense.category}: ${expense.amount}
        </li>
      ))
    )}
  </ul>
);

export default ExpenseList;
