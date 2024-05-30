import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/counterSlice'

function Counter() {
  // read counter slice state from global state
  const counter = useSelector((state) => {
    return state.counter
  })

  // get the dispatcher
  const dispatch = useDispatch()

  const onIncrement = () => {
    // increment the global store value
    dispatch(increment())
  }

  const onDecrement = () => {
    // decrement the global store value
    dispatch(decrement())
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>Counter: {counter.value}</div>
      <hr />
      <div>
        <button onClick={onIncrement}>increment</button>
        <button onClick={onDecrement}>decrement</button>
      </div>
    </div>
  )
}

export default Counter
