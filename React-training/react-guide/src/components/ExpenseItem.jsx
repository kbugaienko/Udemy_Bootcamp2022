import './ExpenseItem.css';

function ExpenseItem (props) {
  return (
    <div className="expense__item">
      <div>{props.date.toISOString()}</div>
      <div className="expense__item--descr">
        <h2>{props.title}</h2>
        <div className="expense__item--price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
