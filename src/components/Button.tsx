import React from 'react'
import './Button.css'

interface ButtonProps {
  onClick: () => void
  className?: string
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, className = '', children }) => {
  const handleClick = () => {
    // Add haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(10)
    }
    onClick()
  }

  return (
    <button
      className={`calculator-button ${className}`}
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  )
}

export default Button