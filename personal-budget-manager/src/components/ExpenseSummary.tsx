import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

// Registering required elements for Chart.js
Chart.register(ArcElement);

interface Expense {
  amount: number;
  category: string;
}

interface ExpenseSummaryProps {
  expenses: Expense[];
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ expenses }) => {
  const categories = [...new Set(expenses.map((expense) => expense.category))];
  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map((category) =>
          expenses
            .filter((expense) => expense.category === category)
            .reduce((sum, expense) => sum + expense.amount, 0)
        ),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <Pie
      data={data}
      key={JSON.stringify(data)} // Unique key forces chart to re-render correctly
    />
  );
};

export default ExpenseSummary;
