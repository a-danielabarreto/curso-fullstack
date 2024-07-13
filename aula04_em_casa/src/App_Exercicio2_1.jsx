import React from 'react'

const App = () => {

  const estilo = {
    color: '#008000',
    backgroundColor: '#ffff00',
    width: '100px',
    fontWeight: 'bold'
  }

  return (
    <div style={estilo}>
      Texto com estilo inline
    </div>
  )
}

export default App