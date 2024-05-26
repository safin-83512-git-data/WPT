import { useState } from 'react'

function Counter() {
  // add a member named counter with initial value as 0
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter == 0) {
      alert('cant not decrement any more')
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>Value = {counter}</div>
      <div className='button-group' role='group'>
        <button onClick={increment} className='btn btn-primary'>
          +
        </button>
        <button onClick={decrement} className='btn btn-success'>
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
