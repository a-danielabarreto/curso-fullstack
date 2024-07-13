import React from 'react'

const App = () => {

  const estilo = {
    color: '#ffa500',
    backgroundColor: '#808080',
    width: '150px',
    margin: '20px'
  }

  return (
    <div style={estilo}>
      Texto com estilo inline
    </div>
  )
}

export default App