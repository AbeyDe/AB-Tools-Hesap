/**
 * Performs mathematical calculations
 */
export const calculate = (firstOperand: number, secondOperand: number, operation: string): number => {
  switch (operation) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case '×':
      return firstOperand * secondOperand
    case '÷':
      if (secondOperand === 0) {
        throw new Error('Cannot divide by zero')
      }
      return firstOperand / secondOperand
    default:
      return secondOperand
  }
}

/**
 * Formats numbers for display
 */
export const formatNumber = (num: number): string => {
  if (isNaN(num)) {
    return 'Error'
  }
  
  if (!isFinite(num)) {
    return 'Error'
  }
  
  // Handle very large or very small numbers
  if (Math.abs(num) >= 1e10 || (Math.abs(num) < 1e-6 && num !== 0)) {
    return num.toExponential(6)
  }
  
  // Remove trailing zeros and unnecessary decimal point
  const formatted = parseFloat(num.toPrecision(12)).toString()
  
  // Limit display length
  if (formatted.length > 12) {
    return num.toExponential(6)
  }
  
  return formatted
}