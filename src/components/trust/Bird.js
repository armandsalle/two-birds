import React, { useEffect, useRef, useCallback, useState } from "react"
import cn from "classnames"
import Img from "gatsby-image"
import { gsap } from "gsap"
import Lottie from "lottie-react"
import SocialLink from "../scocialLink"
import CustomRichText from "../richText"
import reveal from "../../animations/reveal"

const Bird = ({ align, bird, anim, id }) => {
  const imgRef = useRef()
  const titleRef = useRef()
  const descRef = useRef()
  const socialRef = useRef()

  const [animPlay, setAnimPlay] = useState(false)
  const [animLoop, setAnimLoop] = useState(true)

  useEffect(() => {
    if (window.matchMedia("screen and (min-width: 992px)").matches) {
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: imgRef.current,
          start: () => `top 80%`,
        },
        opacity: 1,
        x: 0,
        ease: "Quad.easeOut",
        duration: 2,
      })
    } else {
      gsap.set(imgRef.current, { x: 0 })
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia("screen and (max-width: 992px)").matches) {
      setAnimLoop(false)
      gsap.fromTo(
        imgRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          scrollTrigger: {
            trigger: imgRef.current,
            start: () => `top 80%`,
          },
          opacity: 1,
          y: 0,
          ease: "Quad.easeOut",
          duration: 1,
          onStart: () => {
            setAnimPlay(true)
          },
        }
      )
      reveal(titleRef.current, titleRef.current, false, "80%")
      reveal(descRef.current, descRef.current, false, "80%")
      reveal(socialRef.current, socialRef.current, false, "80%")
    }
  }, [setAnimLoop, setAnimPlay])

  const hoverImg = useCallback(
    e => {
      if (window.matchMedia("screen and (min-width: 992px)").matches) {
        setAnimPlay(true)

        const birds = [...document.querySelectorAll(".trust__birds__half")]
        const content = [
          ...document.querySelectorAll(".trust__birds__half__content"),
        ]
        const otherBird = id === 0 ? birds[1] : id === 1 ? birds[0] : birds[0]

        const imgShow = e.currentTarget.querySelector(".hover")
        const imgLookingAt = e.currentTarget.querySelector(".looking-at")
        const otherImgLooinkgAt = otherBird.querySelector(".looking-at")
        const otherImgShow = otherBird.querySelector(".hover")
        const imgNormal = e.currentTarget.querySelector(".normal")
        const otherImgNormal = otherBird.querySelector(".normal")

        //iamge show
        gsap.set([imgNormal, otherImgNormal], { display: "none" })
        gsap.set([otherImgShow, imgLookingAt], { opacity: 0 })
        gsap.set([imgShow, otherImgLooinkgAt], { opacity: 1 })
        //content show
        gsap.set(content[id === 0 ? 1 : 0], { display: "none", opacity: 0 })
        gsap.set(content[id], { display: "block", opacity: 1 })
      }
    },
    [setAnimPlay, id]
  )

  return (
    <div
      className="trust__birds__half"
      role="content"
      onMouseEnter={e => hoverImg(e)}
      onClick={e => hoverImg(e)}
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
            <Lottie animationData={anim} autoplay={animPlay} loop={animLoop} />
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
      <div className="trust__birds__half__content--mobile">
        <h3 className="h3" ref={titleRef}>
          {bird.birdsName}
        </h3>
        <CustomRichText
          data={bird.birdsText}
          className="p"
          isText
          ref={descRef}
        />
        <div className="trust__birds__social mt-32" ref={socialRef}>
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
