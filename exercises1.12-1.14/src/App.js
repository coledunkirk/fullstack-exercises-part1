import React, { useState } from 'react'

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const NumberOfVotes = ({ array, value }) => {
  let getNumber = array.filter((v) => (v === value)).length
  if (getNumber === 0) return null
  return (
    <div>has {getNumber} votes</div>
  )
}

const MostVotes = ({ array, anecdotes }) => {
  let highestNumber = [...array]
    .sort(
      (previous, current) =>
        array.filter(item => item === previous).length -
        array.filter(item => item === current).length
    )
    .pop();

  let highestOccurrence = array.filter((v) => (v === highestNumber)).length

  console.log(highestOccurrence)
  console.log(highestNumber)

  if (highestOccurrence === 0) return null

  return (
    <div>
       <div>{anecdotes[highestNumber]}</div>
      <div>has {highestOccurrence} votes</div>
     </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([])

  const handleClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const handleVote = () => {
    let voteTotal = votes.concat(selected)
    setVotes(voteTotal)
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Button onClick={handleClick} text='next anecdote'/>
      <Button onClick={handleVote} text='vote'/>
      <div>{anecdotes[selected]}</div>
      <NumberOfVotes array={votes} value={selected}/>
      <h1>Anecdote with the most votes</h1>
      <MostVotes array={votes} anecdotes={anecdotes}/>
    </div>
  )
}

export default App
