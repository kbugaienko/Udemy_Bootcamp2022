import ExpenseItem from "./components/ExpenseItem";

function App() {
  // The same in JS
  // const parag = document.createElement('p');
  // parag.textContent = 'This is also visible!';
  // document.getElementById('root').append(parag);

  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      price: 297.99,
      data: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Toilet paper",
      price: 299.99,
      data: new Date(2021, 3, 31),
    },
    {
      id: "e3",
      title: "Kitchen table",
      price: 355.99,
      data: new Date(2022, 5, 11),
    },
    {
      id: "e4",
      title: "New desk(wooden)",
      price: 453.99,
      data: new Date(2022, 7, 15),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        data={expenses[0].data}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        data={expenses[1].data}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        data={expenses[2].data}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        data={expenses[3].data}
      ></ExpenseItem>
    </div>
  );
}

export default App;
