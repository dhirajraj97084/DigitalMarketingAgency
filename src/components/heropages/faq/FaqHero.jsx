import React from 'react'
import Faq from '../../../pages/services/graphicDesign/Faq'

function FaqHero() {
  return (
    <div>
      <div className="main grid grid-cols-1 md:grid-cols-2 px-4 md:px-6 lg:px-12">
        <div className="left">
        <Faq/>
        </div>
        <div className="right">
          <img src="img/faq_11zon.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default FaqHero
