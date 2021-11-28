import React, { useState } from 'react'

const StatisticsLine = ({ name, value }) => <tr><td>{name}</td><td>{value}</td></tr>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  const totalFeedback = () => props.good + props.neutral + props.bad

  const totalScores = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    console.log(total)
    return total;
  };

  const getAverage = () => {
    let arrayTotal = totalScores(props.allScores)
    if (arrayTotal === 0) {
      return 0
    }
    return arrayTotal / props.allScores.length
  }

  const getPositive = () => {
    let positive = props.good / totalFeedback()
    return `${positive * 100} %`
  }
  
  if (totalFeedback() === 0) {
    return (
      <div>
        <div>No feedback given</div>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticsLine name='good' value={props.good}/>
        <StatisticsLine name='neutral' value={props.neutral}/>
        <StatisticsLine name='bad' value={props.bad}/>
        <StatisticsLine name='all' value={totalFeedback()}/>
        <StatisticsLine name='average' value={getAverage()}/>
        <StatisticsLine name='positive' value={getPositive()}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allScores, setAll] = useState([])

  const handleGood = () => {
    setAll(allScores.concat(1))
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setAll(allScores.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setAll(allScores.concat(-1))
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button 
        onClick={handleGood}
        text='good'
      />
       <Button 
        onClick={handleNeutral}
        text='neutral'
      />
       <Button 
        onClick={handleBad}
        text='bad'
      />
      <h1>statistics</h1>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        allScores={allScores}
      />
    </div>
  )
}

export default App
