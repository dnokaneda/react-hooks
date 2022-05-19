import React, { useRef, useEffect, useState } from 'react';

const ExampleTwo = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(0);
  const prevCount = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <>
      <h4>Exemplo 02: Mudanças de estado</h4>
      <div>
        <p><b>Contador atual:</b> {count}</p>
        <p><b>Contador anterior:</b> {prevCount}</p> 
        <button onClick={() => setCount(count + 1)}>Adicionar</button>    
      </div>
    </>
  );
}

export default ExampleTwo;
