import React from 'react'
import Calculator from './components/Calculator'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>AB Tools</h1>
        <span>Calculator</span>
      </header>
      <main className="app-main">
        <Calculator />
      </main>
    </div>
  )
}

export default App