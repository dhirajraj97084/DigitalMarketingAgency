import React from 'react'
import Layout from '../../components/layout/Layout'
import AutoScrollImage from '../../components/heropages/autoScrollImage/AutoScrollImage'
import SecondHeroPage from '../../components/heropages/secondHeroPage/SecondHeroPage'
import ServiceHeroPage from '../../components/heropages/serviceHeroPage/ServiceHeroPage'
import AboutUsHeroPage from '../../components/heropages/aboutUsHeropage/AboutUsHeroPage'
import ClientHeroPage from '../../components/heropages/clientHeroPage/ClientHeroPage'
import OurWorkHome from '../../components/heropages/ourWork/OurWorkHome'
import OurProfessionals from '../../components/heropages/ourProfessionals/OurProfessionals'
import FaqHero from '../../components/heropages/faq/FaqHero'
import ContactForm from '../../components/heropages/contactForm/ContactForm'
import GoogleRating from '../../components/heropages/googleRating/GoogleRating'



function Home() {
  return (
    <Layout>
      <AutoScrollImage/>
      <SecondHeroPage/>
      <ServiceHeroPage/>
      <AboutUsHeroPage/>
      <ClientHeroPage/>
      <OurWorkHome/>
      <OurProfessionals/>
      <FaqHero/>
      <ContactForm/>
      <GoogleRating/>
    </Layout>
  )
}

export default Home
