import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={ handleIncrement }>
        Count is: {count}
      </button>
    </div>
  );
}

export default Counter;