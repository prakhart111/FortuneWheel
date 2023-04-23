import React from 'react'
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import SpinWheel from './SpinWheel'
import HomePage from './HomePage'
import Reward from './Reward'
import bg1 from './assets/bg1.png'
import bg2 from './assets/bg2.png'

const App = () => {
  return (
    <div className='bg-theme-green max-h-screen max-w-screen'>
      <img src={bg1} className="absolute top-0" />
      <img src={bg2} className="absolute bottom-0" />
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route exact path="/spin" element={<SpinWheel />} />
                <Route exact path="/reward" element={<Reward />} />
            </Routes>
        </Router>
    </div>
  )
}

export default App