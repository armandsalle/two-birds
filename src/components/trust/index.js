import React, { useEffect, useRef, useContext, useState } from "react"
import gsap from "gsap/gsap-core"
import CustomRichText from "../richText"
import reveal from "../../animations/reveal"
import Bird from "./Bird"
import SocialLink from "../scocialLink"
import useIsTouchDesign from "../../hooks/useIsTouchDesign"
import { AnimationContext } from "../../contexts/animationContext"

const Trust = ({ title, text, birds }) => {
  const { trustLotties, animationsCanRuns } = useContext(AnimationContext)

  const [lotties, setLotties] = useState(null)

  const titleRef = useRef()
  const textRef = useRef()

  const firstBird = birds[0]
  const secondBird = birds[1]
  const isTouchDesign = useIsTouchDesign()

  useEffect(() => {
    // Get the heightest height of both contents on screen larger than a smartphone
    if (
      window.matchMedia("screen and (min-width: 992px)").matches &&
      !isTouchDesign &&
      lotties
    ) {
      const contentWrapper = document.querySelector(
        ".trust__birds__content__wrapper"
      )
      const contents = [
        ...document.querySelectorAll(".trust__birds__half__content"),
      ]
      // Filter the heightest height
      const heights = contents.map(e => e.getBoundingClientRect().height)
      const highestHeight = Math.max.apply(null, heights)

      contentWrapper.style.height = `${highestHeight}px`

      let hasRunOnce = false

      // Check which side of the content is first enter to diplay the content
      // and start animation of the hover birds
      contentWrapper.addEventListener("mouseenter", e => {
        const hasDisplayBlock = contents.filter(
          e => e.style.display === "block"
        )
        const halfs = document.querySelectorAll(".trust__birds__half")

        if (!hasRunOnce && hasDisplayBlock.length === 0) {
          const mouseX = e.clientX
          const wrapperWidth = contentWrapper.getBoundingClientRect().width

          if (mouseX > wrapperWidth / 2) {
            // right
            gsap.set(contents[1], { display: "block", opacity: 1 })
            halfs[1].click()
          } else if (mouseX < wrapperWidth / 2) {
            // left
            gsap.set(contents[0], { display: "block", opacity: 1 })
            halfs[0].click()
          }
          hasRunOnce = true
        }
      })
    }
  }, [isTouchDesign, lotties])

  useEffect(() => {
    if (animationsCanRuns) {
      const lotties = trustLotties.reduce((prev, el) => {
        return {
          ...prev,
          [Object.keys(el)[0]]: el[Object.keys(el)[0]],
        }
      }, {})
      setLotties(lotties)
    }
  }, [animationsCanRuns, trustLotties, setLotties])

  useEffect(() => {
    reveal(titleRef.current, titleRef.current, false, "70%")
    reveal(textRef.current, textRef.current, false, "70%")
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
        {lotties && (
          <>
            <Bird
              align="left"
              bird={firstBird}
              anim={lotties.trust_lottie_vincent}
              id={0}
            />
            <Bird
              align="right"
              bird={secondBird}
              anim={lotties.trust_lottie_clement}
              id={1}
            />
          </>
        )}
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
