import React from 'react'
import Adicao from './components/Adicao'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <Adicao num1={2} num2={3} />
    </div>
  )
}

export default App