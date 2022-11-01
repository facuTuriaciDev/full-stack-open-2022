import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;

    if (all === 0) {
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    }
    return(
      <table>
        <tbody>
          <StatisticsLine text='good' value={good}/>
          <StatisticsLine text='neutral' value={neutral}/>
          <StatisticsLine text='bad' value={bad}/>
          <StatisticsLine text='all' value={all}/>
          <StatisticsLine text='average' value={(good - bad) / all}/>
          <StatisticsLine text='positive' value={(good / all) * 100}/>
        </tbody>
      </table>
    )
    
  }

  const StatisticsLine = ({text, value}) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )

    return (
      <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text='good' />
        <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button onClick={() => setBad(bad + 1)} text='bad'/>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>

      </div>
    )
}

export default App