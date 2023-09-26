import './ExpenseItem.css';

function ExpenseItem () {
  return (
    <div className="expense__item">
      <div>March 28 2002</div>
      <div className="expense__item--descr">
        <h2>Car Insurance</h2>
        <div className="expense__item--price">$294.56</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
