import React , {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const useFetch = url => {
    useEffect(() => {
        fetch(url).then(x => x.text()).then(y => {alert(y)})
    }
    )
    
    }
    useFetch(`http://numbersapi.com/${count}/trivia`);
    //const fact = useFetch(`http://numbersapi.com/${count}/trivia`);
    //console.log(fact);

  return (
    <div className='counter'>
      <h1>Fact Generator</h1>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
