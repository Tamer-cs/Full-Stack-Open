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
  const StaticLine = (props) => {
    return ( 
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )

  }
  const Statistics = (props) => {
    const t = props.total

    return (t === 0 ? (<p>No feedback given</p>) :
      <table>
        <tbody>
          <StaticLine text="good" value={props.good} />
          <StaticLine text="neutral" value={props.neutral} />
          <StaticLine text="bad" value={props.bad} />
          <StaticLine text="all" value={props.total} />
          <StaticLine text="average" value={props.average} />
          <StaticLine text="positive" value={props.positive + " %"} />
        </tbody>
      </table>
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