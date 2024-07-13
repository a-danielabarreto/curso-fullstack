import React from 'react'

const App = () => {

  const condicional = true;

  const style = condicional 
  ? {
      color: '#0000ff',
      backgroundColor: '#ffc0cb',
      height: '300px',
      padding: '15px'
    } 
  : {
      color: '#000000',
      backgroundColor: '#ffffff',
      height: '250px',
      padding: '5px'
    };

  return (
    <div style={style}>
      Texto com estilo inline dinâmico
    </div>
  )
}

export default App