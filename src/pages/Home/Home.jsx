import React from 'react'
import BannerSlider from './Components/BannerSlider.jsx';
import AboutUsSection from './Components/AboutUs.jsx';
import OurTeamSection from './Components/OurTeamSection.jsx';
import InnerBannerSection from './Components/InnerBannerSection.jsx';
import OurStrategySection from './Components/OurStrategySection.jsx';
import OurEventsSection from './Components/OurEventsSection.jsx';
import OurBrands from './Components/OurBrands.jsx';

import './Home.css';

export default function Home() {
  return (
     <>
       <BannerSlider />
       <AboutUsSection />
       <OurTeamSection />
       <InnerBannerSection />
       <OurStrategySection />
       <OurEventsSection />
        <OurBrands />
     </>
  )
}
