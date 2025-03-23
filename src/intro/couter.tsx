import { useState } from 'react';
import '../App.css';

interface CounterProps {
  value: number
}

const Counter:React.FC<CounterProps> = ( { value } ) => {
  const [count, setCount] = useState( value );

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(value);
  

  return (
    <>
      <h1> { count } </h1>
      <button onClick={ handleIncrement }> +1 </button>
      <button onClick={ handleDecrement }> -1 </button>
      <button onClick={ handleReset }> reset </button>
    </>
  );
}

export default Counter;