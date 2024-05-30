import { useSelector } from 'react-redux'

function AnotherCounter() {
  const counter = useSelector((state) => {
    return state.counter
  })

  return (
    <div>
      <h2>Another Counter</h2>
      <div>Counter: {counter.value}</div>
    </div>
  )
}

export default AnotherCounter
