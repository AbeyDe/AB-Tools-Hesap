import React, { useState } from 'react'
import Display from './Display'
import Button from './Button'
import { calculate, formatNumber } from '../utils/calculator'
import './Calculator.css'

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(formatNumber(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const performCalculation = () => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      setDisplay(formatNumber(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const performPercentage = () => {
    const value = parseFloat(display) / 100
    setDisplay(formatNumber(value))
  }

  const toggleSign = () => {
    if (display !== '0') {
      const newValue = parseFloat(display) * -1
      setDisplay(formatNumber(newValue))
    }
  }

  return (
    <div className="calculator">
      <Display value={display} />
      
      <div className="calculator-keypad">
        <div className="calculator-row">
          <Button onClick={clear} className="function">AC</Button>
          <Button onClick={toggleSign} className="function">±</Button>
          <Button onClick={performPercentage} className="function">%</Button>
          <Button onClick={() => performOperation('÷')} className="operator">÷</Button>
        </div>
        
        <div className="calculator-row">
          <Button onClick={() => inputNumber('7')} className="number">7</Button>
          <Button onClick={() => inputNumber('8')} className="number">8</Button>
          <Button onClick={() => inputNumber('9')} className="number">9</Button>
          <Button onClick={() => performOperation('×')} className="operator">×</Button>
        </div>
        
        <div className="calculator-row">
          <Button onClick={() => inputNumber('4')} className="number">4</Button>
          <Button onClick={() => inputNumber('5')} className="number">5</Button>
          <Button onClick={() => inputNumber('6')} className="number">6</Button>
          <Button onClick={() => performOperation('-')} className="operator">−</Button>
        </div>
        
        <div className="calculator-row">
          <Button onClick={() => inputNumber('1')} className="number">1</Button>
          <Button onClick={() => inputNumber('2')} className="number">2</Button>
          <Button onClick={() => inputNumber('3')} className="number">3</Button>
          <Button onClick={() => performOperation('+')} className="operator">+</Button>
        </div>
        
        <div className="calculator-row">
          <Button onClick={() => inputNumber('0')} className="number zero">0</Button>
          <Button onClick={inputDecimal} className="number">.</Button>
          <Button onClick={performCalculation} className="operator equals">=</Button>
        </div>
      </div>
    </div>
  )
}

export default Calculator