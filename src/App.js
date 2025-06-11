import React, { useState } from "react";
import "./App.css";
import TextField from "./components/TextField";

function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>FORM INPUT {inputValue}</h1>
      <TextField value={inputValue} onChange={handleChange} />
    </div>
  );
}

export default App;

/*
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <Button label="Increment" onClick={handleIncrement} />
      <Button label="Decrement" onClick={handleDecrement} />
      <Button label="Reset" onClick={handleReset} />
    </div>
  );
}

export default App;
*/