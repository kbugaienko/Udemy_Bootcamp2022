import './ExpenseItem.css';

function ExpenseItem(props) {

  const month = props.data.toLocaleString('en-US', {month: 'long'});
  const day = props.data.toLocaleString('en-US', {day: 'numeric'});
  const year = props.data.getFullYear();

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className='expense-item__description'>
        <h2 className='expense-item h2'>{props.title}</h2>
        <div className='expense-item__price'>{props.price}</div>
      </div>
    </div>
  ); 
}

export default ExpenseItem;
