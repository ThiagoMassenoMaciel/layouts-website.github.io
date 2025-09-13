import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Layout_1 from './layout_1/Layout_1'
import TelaPincipal from './TelaPincipal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaPincipal/>} />
          <Route path="/layout_1" element={<Layout_1/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
