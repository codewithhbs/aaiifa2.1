import React from 'react'
import Innerbg from '../Images/sec-bg.jpg';

export default function InnerBannerSection() {
  return (
    <div>
        <section
  className="section-padding-md bg-no-repeat fxt-inner-banner-wrap-layout1 bg-size-cover bg-attachment-fixed"
  style={{ backgroundImage: `url(${Innerbg})` }}>
  <div className="container">
    <div className="fxt-inner-banner-box-layout1">
      <div className="item-content">
        {/* <div className="item-subtitle">25+ YEARS OF EXPERIENCES</div> */}
        <h2 className="item-title">Custom Steel Pipe For Your Next Project</h2>
      </div>
      <div className="banner-btn">
        <a href="/contact" className="btn-fill">Get A Quote  </a>
      </div>
    </div>
  </div>
</section>;

    </div>
  )
}
