import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const [input,setInput] = useState("")
  const increment = () => {
    return setCount(count + parseInt(input));
  };

  const userInput = (e)=>{
      setInput(e.target.value)
  }
  return (
    <div>
      <h1>Counter</h1>
      <input type="text" value={input} onChange={userInput} ></input>
      <p>Count:{count}</p>

      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
