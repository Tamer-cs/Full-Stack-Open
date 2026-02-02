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
  const Statistics = (props) => {
    const t = props.total

    return (t === 0 ? (<p>No feedback given</p>) :
      <div>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.total}</p>
        <p>average {props.average}</p>
       <p>positive {props.positive} %</p>
      </div>
    )
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setToGood} text="good" />
      <Button onClick={setToNeutral} text="neutral" />
      <Button onClick={setToBad} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total()} average={average()} positive={positive()} />

    </div>
  )
}

export default App