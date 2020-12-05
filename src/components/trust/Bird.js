import React, { useEffect, useRef, useCallback, useState } from "react"
import cn from "classnames"
import Img from "gatsby-image"
import SocialLink from "../scocialLink"
import CustomRichText from "../richText"
import reveal from "../../animations/reveal"
import { gsap } from "gsap"
import Lottie from "lottie-react"

const Bird = ({ align, bird, anim }) => {
  const imgRef = useRef()
  const titleRef = useRef()
  const textRef = useRef()
  const socialRef = useRef()

  const [animPlay, setAnimPlay] = useState(false)

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

  const hoverImg = useCallback(
    (e, state) => {
      if (state === "in") {
        setAnimPlay(true)
      }
      if (state === "out") {
        setAnimPlay(false)
      }

      const birds = [...document.querySelectorAll(".trust__birds__half")]
      const otherBird = birds.filter(el => el !== e.currentTarget)

      const imgShow = e.currentTarget.querySelector(".hover")
      const imgNormal = e.currentTarget.querySelector(".normal")

      const otherImgNormal = otherBird[0].querySelector(".normal")
      const otherImgLooinkgAt = otherBird[0].querySelector(".looking-at")

      if (state === "in") {
        gsap.set(imgNormal, { opacity: 0 })
        gsap.set(imgShow, { opacity: 1 })
        gsap.set(otherImgNormal, { opacity: 0 })
        gsap.set(otherImgLooinkgAt, { opacity: 1 })
      }

      if (state === "out") {
        gsap.set(imgNormal, { opacity: 1 })
        gsap.set(imgShow, { opacity: 0 })
        gsap.set(otherImgNormal, { opacity: 1 })
        gsap.set(otherImgLooinkgAt, { opacity: 0 })
      }
    },
    [setAnimPlay]
  )

  return (
    <div
      className="trust__birds__half"
      role="content"
      onMouseEnter={e => hoverImg(e, "in")}
      onMouseLeave={e => hoverImg(e, "out")}
    >
      <div className={cn("trust__birds__half__header", align)} ref={imgRef}>
        <div className="img looking-at">
          <Img
            fluid={bird.birdsImageLookingAtSharp.childImageSharp.fluid}
            alt={bird.birdsImage?.alt}
            fadeIn={false}
          />
        </div>
        <div className="img hover">
          <div className="lottie">
            <Lottie animationData={anim} autoplay={animPlay} />
          </div>
          <Img
            fluid={bird.birdsImageHoverSharp.childImageSharp.fluid}
            alt={bird.birdsImage?.alt}
            fadeIn={false}
          />
        </div>
        <div className="img normal">
          <Img
            fluid={bird.birdsImageSharp.childImageSharp.fluid}
            alt={bird.birdsImage?.alt}
            fadeIn={false}
          />
        </div>
      </div>
      <div className="trust__birds__half__content">
        <h3 className="h3 mt-80 " ref={titleRef}>
          {bird.birdsName}
        </h3>
        <CustomRichText
          data={bird.birdsText}
          className="p mt-24 "
          isText
          ref={textRef}
        />
        <div className="trust__birds__social mt-32 " ref={socialRef}>
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
    </div>
  )
}

export default Bird
