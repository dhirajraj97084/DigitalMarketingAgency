import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import NoPage from './pages/nopage/NoPage'
import ScrollTop from './components/scrollTop/ScrollTop'
import CareerPage from './pages/careerPage/CareerPage'
import SubBlogPage from './pages/blogPage/subBlogPage/SubBlogPage'
import ContactUsPage from './pages/contactUsPage/ContactUsPage'
import AboutPage from './pages/aboutPage/AboutPage'

function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/career' element={<CareerPage/>} />
          <Route path='/blog' element={<SubBlogPage/>} />
          <Route path='/contactus' element={<ContactUsPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
