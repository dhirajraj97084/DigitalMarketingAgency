import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import NoPage from './pages/nopage/NoPage'
import ScrollTop from './components/scrollTop/ScrollTop'

function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
