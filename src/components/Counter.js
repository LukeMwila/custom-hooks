import React, { useState } from 'react'

const useCounter = ({initialState, step}) => {
    const [count, setCount] = useState(initialState)
    const increment = () => setCount(count + step)
    return {count, increment}
}

const Counter = () => {
  const { count, increment } = useCounter({ initialState: 5, step: 3 })
  return <button onClick={increment}>{count}</button>
}

export default Counter