import { useState } from 'react'

import './App.css'
import Create from './assets/components/Create'
import Read from './assets/components/Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './assets/components/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Create/>}/>
  <Route path='/read' element={<Read/>}/>
  <Route path='/update' element={<Update/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
