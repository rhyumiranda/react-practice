// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

function MyComponent(){

  const [name, setName] = useState("Guest");

  const updateName = () => {
    setName("Rhyu");
  }

  const [age, setAge] = useState(0);

  const updateAge = () => {
    setAge(19);
  };

  const [isEmployee, setStatus] = useState(false);

  const updateStatus = () => {
    setStatus(!isEmployee);
  }

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return(
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
      </div>
      <div>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>
      </div>
      <div>
        <p>Is Employee: {isEmployee ? "Yes" : "No"}</p>
        <button onClick={updateStatus}>Set Status</button>
      </div>
      <div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default MyComponent