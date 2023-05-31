import { useState } from "react";

import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


const Dummy_Expenses = [
  { id: 'e1', title: 'Car Insurance 1', amount: 257.88, date: new Date(2021, 4, 25) },
  { id: 'e2', title: 'Car Insurance 2', amount: 247.88, date: new Date(2022, 2, 25) },
  { id: 'e3', title: 'Car Insurance 3', amount: 237.88, date: new Date(2021, 2, 25) }
];


const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses)

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses])   // A way of updating 
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]      // Cleaner way of updating state
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;