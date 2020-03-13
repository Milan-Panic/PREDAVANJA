import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // Чувамо стање за сваки клик посебно
  // Почетно стање за све оцене је 0
  const [positive, setPositive] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [negative, setNegative] = useState(0)
  let ukupno = positive + neutral + negative

  return (
    <div>
      <p>{positive}
      <button onClick={() => setPositive(positive + 1)}>Positive</button></p>
      <p>{neutral}
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button></p>
      <p>{negative}
      <button onClick={() => setNegative(negative + 1)}>Negative</button></p>
      <p>Ukupno: {ukupno}</p>
      <p>Procenat: {(positive / ukupno) * 100}</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)