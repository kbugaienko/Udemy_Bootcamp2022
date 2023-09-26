import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense__date'>
       <div className='expense__date-month'>{month}</div>
      <div className='expense__date-year'>{year}</div>
      <div className='expense__date-day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
