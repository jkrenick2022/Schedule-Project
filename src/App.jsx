import './App.css'
import React from 'react'
import Calendar from './components/Calendar.jsx'

const App = () => {
  return (
    <div className="App">
      <h1>A Week at Disney</h1>
      <h2>Here is a one week ititerary of the best way to manage your time at Disney World Orlando, Florida!</h2>
      <Calendar />
    </div>
  )
}

export default App
