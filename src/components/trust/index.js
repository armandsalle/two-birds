import React, { useEffect, useRef } from "react"
import CustomRichText from "../richText"
import reveal from "../../animations/reveal"
import Bird from "./Bird"
import { socialEnter, socialLeave } from "../../animations/cursor"
import SocialLink from "../scocialLink"
import animClement from "../../images/aboutUsClement.json"
import animVincent from "../../images/aboutUsVincent.json"
import gsap from "gsap/gsap-core"

const Trust = ({ title, text, birds }) => {
  const titleRef = useRef()
  const textRef = useRef()

  const firstBird = birds[0]
  const secondBird = birds[1]

  useEffect(() => {
    // Get the heightest height of both contents on screen larger than a smartphone
    if (window.matchMedia("screen and (min-width: 767px)").matches) {
      const contentWrapper = document.querySelector(
        ".trust__birds__content__wrapper"
      )
      const contents = [
        ...document.querySelectorAll(".trust__birds__half__content"),
      ]
      const heights = contents.map(e => e.getBoundingClientRect().height)
      const highestHeight = Math.max.apply(null, heights)

      contentWrapper.style.height = `${highestHeight}px`

      let hasRunOnce = false

      // Check which side of the content is first enter to diplay the content
      contentWrapper.addEventListener("mouseenter", e => {
        if (!hasRunOnce) {
          const mouseX = e.clientX
          const wrapperWidth = contentWrapper.getBoundingClientRect().width

          if (mouseX > wrapperWidth / 2) {
            // right
            gsap.set(contents[1], { display: "block", opacity: 1 })
          } else if (mouseX < wrapperWidth / 2) {
            // left
            gsap.set(contents[0], { display: "block", opacity: 1 })
          }
          hasRunOnce = true
        }
      })
    }
  }, [])

  useEffect(() => {
    reveal(titleRef.current, titleRef.current, false, "70%")
    reveal(textRef.current, textRef.current, false, "70%")
  }, [])

  useEffect(() => {
    const links = [...document.querySelectorAll(".trust .richtext a")]

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        socialEnter()
      })

      link.addEventListener("mouseleave", () => {
        socialLeave()
      })
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", () => {
          socialEnter()
        })

        link.removeEventListener("mouseleave", () => {
          socialLeave()
        })
      })
    }
  }, [])

  return (
    <section className="trust container mt-240">
      <div className="trust__top">
        <h2 className="h2 text-center" ref={titleRef}>
          {title}
        </h2>
        <CustomRichText
          data={text}
          className="text-center mt-24"
          isText
          ref={textRef}
        />
      </div>
      <div className="trust__birds mt-160">
        <Bird align="left" bird={firstBird} anim={animVincent} id={0} />
        <Bird align="right" bird={secondBird} anim={animClement} id={1} />
      </div>
      <div className="trust__birds__content__wrapper">
        <div className="trust__birds__half__content">
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
        <div className="trust__birds__half__content">
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
