import './ExpenseItem.css';

function ExpenseItem (props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense__item">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className="expense__item--descr">
        <h2>{props.title}</h2>
        <div className="expense__item--price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
