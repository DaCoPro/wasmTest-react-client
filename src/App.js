
import './App.css';
import {useState} from 'react';

function App() {
  const [sum, setSum] = useState(0);
   const [fib, setFib] = useState(0);
  import('wasm').then(({add_two_ints, fib}) => {
      const sumResult = add_two_ints(5, 20);
      const fibResult = fib(10);
      setSum(sumResult);
      setFib(fibResult);
  })
   return (
      // I cut out the fluff
      // Displaying our sum and fib values that're updated by WASM
      <div className="App" >
         <div>Sum Results: {sum}</div>
         <div>Fib Results: {fib}</div>
      </div>
  );
}

export default App;
