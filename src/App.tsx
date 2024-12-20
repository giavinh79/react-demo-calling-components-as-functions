import { useState } from 'react';
import './app.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
    </>
  );
};

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  return (
    <main>
      <h1>React Demo - Calling Components as Functions</h1>
      {showCounter && Counter()}
      <button onClick={() => setShowCounter(false)}>Hide Counter</button>
    </main>
  );
};

export default App;
