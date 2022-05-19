import React, { useRef, useEffect, useState } from 'react';

const ExampleThree = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  const prevCountRef = useRef(0);
  const prevCount = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
  });

  useEffect(() => {
    setCount(prevCount + 1);
  }, [prevCount, inputValue]);

  return (
    <>
      <div>
        <h6>Exemplo de renderização desnecessária:</h6>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}          
        />
        <p><b>Total Renderizações:</b> {count}</p>
      </div>  
    </>
  );
}

export default ExampleThree;
