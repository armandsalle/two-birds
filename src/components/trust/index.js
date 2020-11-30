import React, { useEffect, useRef } from "react"
import CustomRichText from "../richText"
import reveal from "../../animations/reveal"
import Bird from "./Bird"
import lo from "../../images/aboutUsClement.json"

const Trust = ({ title, text, birds }) => {
  const titleRef = useRef()
  const textRef = useRef()

  const firstBird = birds[0]
  const secondBird = birds[1]

  useEffect(() => {
    reveal(titleRef.current, titleRef.current, false, "70%")
    reveal(textRef.current, textRef.current, false, "70%")
  }, [])

  return (
    <section className="trust container mt-240">
      <div className="trust__top">
        <h2 className="h2  text-center" ref={titleRef}>
          {title}
        </h2>
        <CustomRichText
          data={text}
          className="text-center mt-24 "
          isText
          ref={textRef}
        />
      </div>
      <div className="trust__birds mt-160">
        <Bird align="left" bird={firstBird} anim={lo} />
        <Bird align="right" bird={secondBird} anim={lo} />
      </div>
    </section>
  )
}

export default Trust
