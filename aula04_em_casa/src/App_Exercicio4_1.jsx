import React from 'react'
import EstacaoAno from './components/EstacaoAno'

const App = () => {
  return (
    <div>
      <EstacaoAno estacao="verao" />
      <EstacaoAno estacao="outono" />
      <EstacaoAno estacao="inverno" />
      <EstacaoAno estacao="primavera" />
    </div>
  )
}

export default App