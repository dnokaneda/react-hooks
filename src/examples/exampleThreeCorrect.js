import React, { useRef, useEffect, useState } from 'react';

const ExampleThree = () => {
  const [count, setCount] = useState(0);
  
  const inputRef = useRef('');
  const prevCountRef = useRef(0);

  const prevCount = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
  });

  useEffect(() => {
    setCount(prevCount + 1);
  }, [prevCount, inputRef]);

  return (
    <>
      <div>
        <h6>Utilização recomendada:</h6>
        <input
          type="text"
          ref={inputRef}
        />
        <p><b>Total Renderizações:</b> {count}</p>
      </div>     
    </>
  );
}

export default ExampleThree;
