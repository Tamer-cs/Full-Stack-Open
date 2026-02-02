import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {
    const newValue = good + 1
    console.log('good now', newValue)
    setGood(newValue)
  }
  const setToNeutral = () => {
    const newValue = neutral + 1
    console.log('neutral now', newValue)
    setNeutral(newValue)
  }
  const setToBad = () => {
    const newValue = bad + 1
    console.log('bad now', newValue)
    setBad(newValue)
  }
  const total = () => good + neutral + bad
 
  const average = () => {
    const t = total()
    return t === 0 ? 0 : (good - bad) / t
  }
  const positive = () => {
    const t = total()
    return t === 0 ? 0 : (good / t) * 100
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setToGood} text="good" />
      <Button onClick={setToNeutral} text="neutral" />
      <Button onClick={setToBad} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total()}</p>
      <p>average {average()}</p>
      <p>positive {positive()} %</p>

    </div>
  )
}

export default App