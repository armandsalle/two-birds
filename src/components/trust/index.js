import React from "react"
import Img from "gatsby-image"
import CustomRichText from "../richText"
import SocialLink from "../scocialLink"

const Trust = ({ title, text, birds }) => {
  const firstBird = birds[0]
  const secondBird = birds[1]

  return (
    <section className="trust container mt-240">
      <div className="trust__top">
        <h2 className="h2 text-center">{title}</h2>
        <CustomRichText data={text} className="text-center mt-24" isText />
      </div>
      <div className="trust__birds mt-160">
        <div className="trust__birds__half">
          <div className="img">
            <Img
              fluid={firstBird.birdsImageSharp.childImageSharp.fluid}
              alt={firstBird.birdsImage?.alt}
              fadeIn={false}
            />
          </div>
          <h3 className="h3 mt-80">{firstBird.birdsName}</h3>
          <CustomRichText
            data={firstBird.birdsText}
            className="p mt-24"
            isText
          />
          <div className="trust__birds__social mt-32">
            {firstBird.birdsTwitter && (
              <SocialLink to={firstBird.birdsTwitter} is="twitter" />
            )}
            {firstBird.birdsLinkedin && (
              <SocialLink to={firstBird.birdsLinkedin} is="linkedin" />
            )}
            {firstBird.birdsInstagram && (
              <SocialLink to={firstBird.birdsInstagram} is="instagram" />
            )}
          </div>
        </div>
        <div className="trust__birds__half">
          <div className="img">
            <Img
              fluid={secondBird.birdsImageSharp.childImageSharp.fluid}
              alt={secondBird.birdsImage?.alt}
              fadeIn={false}
            />
          </div>
          <h3 className="h3 mt-80">{secondBird.birdsName}</h3>
          <CustomRichText
            data={secondBird.birdsText}
            className="p mt-24"
            isText
          />
          <div className="trust__birds__social mt-32">
            {secondBird.birdsTwitter && (
              <SocialLink to={secondBird.birdsTwitter} is="twitter" />
            )}
            {secondBird.birdsLinkedin && (
              <SocialLink to={secondBird.birdsLinkedin} is="linkedin" />
            )}
            {secondBird.birdsInstagram && (
              <SocialLink to={secondBird.birdsInstagram} is="instagram" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
