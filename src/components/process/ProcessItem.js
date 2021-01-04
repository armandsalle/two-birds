import React, { useEffect, useRef, useCallback } from "react"
import CustomRichText from "../richText"
import Lottie from "lottie-react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

const ProcessItem = ({ title, desc, items, anim }) => {
  const processRef = useRef()
  const lottieRef = useRef()

  useEffect(() => {
    if (window.matchMedia("screen and (max-width: 992px)").matches) {
      ScrollTrigger.create({
        trigger: processRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          lottieRef.current.play()
        },
      })
    }
  }, [])

  const hoverImg = useCallback((e, state) => {
    if (window.matchMedia("screen and (min-width: 992px)").matches) {
      if (state === "in") {
        lottieRef.current.play()
      }
      if (state === "out") {
        lottieRef.current.stop()
      }
    }
  }, [])

  return (
    <div
      role="button"
      className="process-item"
      onMouseEnter={e => hoverImg(e, "in")}
      onMouseLeave={e => hoverImg(e, "out")}
      ref={processRef}
    >
      <div className="fake-img">
        <Lottie
          animationData={anim}
          lottieRef={lottieRef}
          loop={false}
          autoplay={false}
        />
      </div>
      <div className="process-item__content">
        <h3 className="h3">{title}</h3>
        <p className="mt-16">{desc}</p>
        <CustomRichText data={items} isText className="mt-24" />
      </div>
    </div>
  )
}

export default ProcessItem
