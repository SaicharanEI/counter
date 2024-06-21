import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      alert("You can't decrease less than 0");
    } else {
      setCount((count) => count - 1);
    }
  };

  const resetCount = () => {
    if (count === 0) {
      alert("Already set to 0");
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <div className="card">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  );
}

export default App;
