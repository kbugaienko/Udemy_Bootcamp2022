import ExpenseItem from './components/ExpenseItem';

function App() {
  // The same in JS
  // const parag = document.createElement('p');
  // parag.textContent = 'This is also visible!';
  // document.getElementById('root').append(parag);

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
