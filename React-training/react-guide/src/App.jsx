import { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's start it!</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
