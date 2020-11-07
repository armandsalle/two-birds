import React, { useEffect, useRef } from "react"
import cn from "classnames"
import Img from "gatsby-image"
import SocialLink from "../scocialLink"
import CustomRichText from "../richText"
import reveal from "../../animations/reveal"
import { gsap } from "gsap"

const Bird = ({ align, bird }) => {
  const imgRef = useRef()
  const titleRef = useRef()
  const textRef = useRef()
  const socialRef = useRef()

  useEffect(() => {
    reveal(titleRef.current, titleRef.current, false, "70%")
    reveal(textRef.current, textRef.current, false, "70%")
    reveal(socialRef.current, socialRef.current, false, "70%")

    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: () => `top center`,
      },
      opacity: 1,
      x: 0,
      ease: "Quad.easeOut",
      duration: 2,
    })
  }, [])

  return (
    <div className="trust__birds__half">
      <div className={cn("img", align)} ref={imgRef}>
        <Img
          fluid={bird.birdsImageSharp.childImageSharp.fluid}
          alt={bird.birdsImage?.alt}
          fadeIn={false}
        />
      </div>
      <h3 className="h3 mt-80 ty-80 opacity-0" ref={titleRef}>
        {bird.birdsName}
      </h3>
      <CustomRichText
        data={bird.birdsText}
        className="p mt-24 ty-80 opacity-0"
        isText
        ref={textRef}
      />
      <div
        className="trust__birds__social mt-32 ty-80 opacity-0"
        ref={socialRef}
      >
        {bird.birdsTwitter && (
          <SocialLink to={bird.birdsTwitter} is="twitter" />
        )}
        {bird.birdsLinkedin && (
          <SocialLink to={bird.birdsLinkedin} is="linkedin" />
        )}
        {bird.birdsInstagram && (
          <SocialLink to={bird.birdsInstagram} is="instagram" />
        )}
      </div>
    </div>
  )
}

export default Bird
