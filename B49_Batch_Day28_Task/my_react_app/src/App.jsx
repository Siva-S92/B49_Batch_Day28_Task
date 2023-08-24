import React from 'react'
import Home from './Home'
import { MyContextProvider } from './MyContext'

function App() {
  return (
    <MyContextProvider>
      <Home/>
    </MyContextProvider>
  )
}

export default App
