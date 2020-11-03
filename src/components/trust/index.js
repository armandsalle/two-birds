import React from "react"
import SocialLink from "../scocialLink"

const Trust = () => {
  return (
    <section className="container mt-240">
      <div className="trust">
        <div className="trust__top">
          <h2 className="h2 text-center">Why trust us</h2>
          <p className="text-center mt-24 ">
            Two birds that hatched @lecolededesign,  eager to help your product
            fly as high as your expectations.
          </p>
        </div>
        <div className="trust__birds mt-160">
          <div className="trust__birds__half">
            <div className="img"></div>
            <h3 className="h3 mt-80">Vincent</h3>
            <p className="p mt-24">
              He studies transcultural design in Shanghai then moves to Paris to
              work with startups as well as with big corporations. His main
              assets are his sens of observation and his analytical mind. His
              things are sociology, videogames and basketball. He gives a hand
              @wero on his spare time.
            </p>
            <div className="trust__birds__social mt-32">
              <SocialLink to="#" is="twitter" />
              <SocialLink to="#" is="linkedin" />
            </div>
          </div>
          <div className="trust__birds__half">
            <div className="img"></div>
            <h3 className="h3 mt-80">Clément</h3>
            <p className="p mt-24">
              He studies tangible interfaces and project management. Over the
              last years, he’ve been evolving his skills @Tigerspike, Sydney.
               His main assets are his eye for details and his creative energy.
              He also love to explore the world and capture the beauty it have
              to offer.
            </p>
            <div className="trust__birds__social mt-32">
              <SocialLink to="#" is="instagram" />
              <SocialLink to="#" is="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
