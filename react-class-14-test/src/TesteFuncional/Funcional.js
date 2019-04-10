import React from 'react';

const Componente = (props) => {
  return (
    <ul>
      {Array(props.number).fill(<li key={Math.random()}>Teste Funcional</li>)}
    </ul>
  );
};

export default Componente;
