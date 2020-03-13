import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Prikaz from './Prikaz'
import Procenat from './Procenat'


const App = () => {
    const [left,setLeft] = useState(0)
    const [right,setRight] = useState(0)
    const [osobe,setOsobe] = useState([])


    // setTimeout(() => setCounter(counter + 1),850)

    return (
        <>  
            <Prikaz left={left} setLeft={setLeft} />
            
            <p>{right}</p>
            <button onClick={() => setRight(right + 1)}>Right</button>
            <button onClick={() => {
              setRight(0);
              setLeft(0);
              setOsobe([])}
              }>Reset</button>
            <Procenat  left = {left} right = {right}></Procenat>
            
            

            <button onClick={() => setOsobe([...osobe,Math.random()])}>X</button>
            {osobe.map(osoba => <p>{osoba}</p>)}
            


        </>
        )
}
//

// h1.addEventListener('click',() => {
//     h1.innerHTML = counter
//     counter++
// })

ReactDOM.render(<App />, document.getElementById('root'))