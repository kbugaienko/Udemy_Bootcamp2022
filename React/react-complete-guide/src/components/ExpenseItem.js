import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>April 01 2023</div>
      <div className='expense-item__description'>
        <h2 className='expense-item h2'>Car Insurance</h2>
        <div className='expense-item__price'>$297.99</div>
      </div>
    </div>
  ); 
}

export default ExpenseItem;
