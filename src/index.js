import React from 'react'
import ReactDOM from 'react-dom'

import Filter from './components/filter.js'

import './styles.css'

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Filter />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
