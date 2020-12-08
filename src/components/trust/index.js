import React, { useEffect, useRef } from "react"
import CustomRichText from "../richText"
import reveal from "../../animations/reveal"
import Bird from "./Bird"
import { socialEnter, socialLeave } from "../../animations/cursor"
import animClement from "../../images/aboutUsClement.json"
import animVincent from "../../images/aboutUsVincent.json"

const Trust = ({ title, text, birds }) => {
  const titleRef = useRef()
  const textRef = useRef()

  const firstBird = birds[0]
  const secondBird = birds[1]

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
        <Bird align="left" bird={firstBird} anim={animVincent} />
        <Bird align="right" bird={secondBird} anim={animClement} />
      </div>
    </section>
  )
}

export default Trust
