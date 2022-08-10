
import './App.css';
import Expenses from './components/Expenses';
import Test from './components/Test';
import State from './components/State';
import Array from './components/Array';
import ComplexCounter from './components/Complex-Counter';
import UseEffect from './components/Use-Effect';
function App() {
  // const testDataOne = 'One';
  // const testDatatwo = 'Two';
  const testData = [
    {id:1,one:'one'},
    {id:2,two:'two'}
  ]
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>

  <Expenses items={expenses}/>   
<State/>
<ComplexCounter></ComplexCounter>
<Array array = {expenses}></Array>
  {testData.map(test=>{
    
    return <Test key={test.id} {...test}/>;
  })}
<UseEffect></UseEffect>
  {/* <Test one={testDataOne}/>
  <Test two={testDatatwo}></Test> */}
    </div>
  );
}

export default App;
