import React from 'react';
import ExampleThreeIncorrect from './exampleThreeIncorrect';
import ExampleThreeCorrect from './exampleThreeCorrect';

const ExampleThree = () => {
  return (
    <>
      <h4>Exemplo 03: Re-renderizações de componentes</h4>
      <div className='container'>
        <ExampleThreeIncorrect />
        <ExampleThreeCorrect />
      </div>  
    </>
  );
}

export default ExampleThree;
