import { useState } from 'react';
import BigNumber from './BigNumber';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <h2>Counter</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Counting: {count}</p>

      <BigNumber count={count} />
    </div>
  );
};

export default Counter;
