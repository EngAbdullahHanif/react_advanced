import React from 'react'

import Setup from './tutorial/1-useState/setup/2-useState-basics'
import UseStateCounter from './tutorial/1-useState/setup/5-useState-counter'
import Cleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup'
import FetchData from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'

function App() {
  return (
    <div className='container'>
      <FetchData />
    </div>
  )
}

export default App
