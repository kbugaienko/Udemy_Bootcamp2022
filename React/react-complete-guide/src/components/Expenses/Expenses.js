import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          price={props.items[0].price}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          price={props.items[1].price}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          price={props.items[2].price}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          price={props.items[3].price}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
