import React, { useRef } from 'react';

const ExampleOne = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  const removefocus = () => {
    inputElement.current.blur();
  };

  return (
    <>
      <h4>Exemplo 01: Acesso ao elemento DOM</h4>
      <div>
        <input 
          type="text" 
          ref={inputElement} 
        />
        <button onClick={focusInput}>ADICIONAR FOCUS</button>
        <button onClick={removefocus}>REMOVER FOCUS</button>
      </div>      
    </>
  );
}

export default ExampleOne;
