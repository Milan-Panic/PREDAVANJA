import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const App = () => {
  // const pab = 'Jolly'
  // const osoba1 = 'Пера'
  // const alkohol1 = 5
  // const osoba2 = 'Ана'
  // const alkohol2 = 7
  // const osoba3 = 'Жика'
  // const alkohol3 = 13
  const pab = {
    ime: 'Jolly',
    osobe: [
      {
        ime: 'Пера',
        alkohol: 5
      },
      {
        ime: 'Ана',
        alkohol: 7
      },
      {
        ime: 'Жика',
        alkohol: 13
      },
      {
        ime: 'Djokica',
        alkohol: 23
      }
    ]
  }

  return (
    <div>
      <Header pab = {pab.ime}></Header>
      <Content x = {pab.osobe}></Content>
      <Footer x = {pab.osobe}></Footer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))