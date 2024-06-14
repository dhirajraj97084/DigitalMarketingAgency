import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import NoPage from './pages/nopage/NoPage'
import ScrollTop from './components/scrollTop/ScrollTop'
import CareerPage from './pages/careerPage/CareerPage'
import SubBlogPage from './pages/blogPage/subBlogPage/SubBlogPage'
import ContactUsPage from './pages/contactUsPage/ContactUsPage'
import AboutPage from './pages/aboutPage/AboutPage'
// sevices
import WebsiteDesign from './pages/services/websiteDesign/WebsiteDesign'
import SocialMedia from './pages/services/socialMedia/SocialMedia'
import Seo from './pages/services/seo/Seo'
import PayPerClick from './pages/services/payperclick/PayPerClick'
import GoogleMyBussiness from './pages/services/googleMyBussiness/GoogleMyBussiness'
import ContentWriting from './pages/services/contentWriting/ContentWriting'
import InfluencerMarketing from './pages/services/influencerMarketing/InfluencerMarketing'
import WhatsAppMarketing from './pages/services/whatsappMarketing/WhatsAppMarketing'
import GraphicDesign from './pages/services/graphicDesign/GraphicDesign'
import ServiceButtonPage from './components/heropages/secondHeroPage/serviceButtonPaage/ServiceButtonPage'
import ContentMarketingPage from './pages/blogPage/blogContentMarketing/ContentMarketingPage'

function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<ServiceButtonPage/>} />
          <Route path='/career' element={<CareerPage/>} />
          <Route path='/content' element={<ContentMarketingPage/>} />
          <Route path='/digitalmarketing' element={<ContentMarketingPage/>} />
          <Route path='/blog' element={<SubBlogPage/>} />
          <Route path='/contactus' element={<ContactUsPage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/websitedesign' element={<WebsiteDesign/>} />
          <Route path='/socialmedia' element={<SocialMedia/>} />
          <Route path='/seo' element={<Seo/>} /> 
          <Route path='/payperclick' element={<PayPerClick/>} />  
          <Route path='/googlemybussiness' element={<GoogleMyBussiness/>} />   
          <Route path='/contentwriting' element={<ContentWriting/>} /> 
          <Route path='/influencermarketing' element={<InfluencerMarketing/>} /> 
          <Route path='/whatsappmarketing' element={<WhatsAppMarketing/>} />  
          <Route path='/graphicdesign' element={<GraphicDesign/>} />  
          <Route path='/*' element={<NoPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
