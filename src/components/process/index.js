import React, { useEffect, useRef, useContext, useState } from "react"
import ProcessItem from "./ProcessItem"
import { gsap } from "gsap"
import reveal from "../../animations/reveal"
import { AnimationContext } from "../../contexts/animationContext"

const Process = ({ title, processList }) => {
  const { processLotties, animationsCanRuns } = useContext(AnimationContext)

  const titleRef = useRef(null)
  const processSectionRef = useRef(null)

  const [lotties, setLotties] = useState(null)

  useEffect(() => {
    if (lotties) {
      const processItems = gsap.utils.toArray(".process-item")

      reveal(titleRef.current, processSectionRef.current, false, "70%")

      if (window.matchMedia("screen and (min-width: 992px)").matches) {
        gsap.fromTo(
          processItems,
          { opacity: 0, y: 80 },
          {
            scrollTrigger: {
              trigger: processItems[0],
              start: () => `-=80 70%`,
            },
            opacity: "100%",
            y: 0,
            stagger: {
              amount: 0.2,
            },
            ease: "Quad.easeOut",
          }
        )
      }
    }
  }, [lotties])

  useEffect(() => {
    if (animationsCanRuns) {
      const lotties = processLotties.reduce((prev, el) => {
        return {
          ...prev,
          [Object.keys(el)[0]]: el[Object.keys(el)[0]],
        }
      }, {})
      setLotties(lotties)
    }
  }, [animationsCanRuns, processLotties, setLotties])

  return (
    <section className="process container mt-240" ref={processSectionRef}>
      <h2 className="h2" ref={titleRef}>
        {title}
      </h2>
      <div className="process-list mt-80">
        {lotties &&
          processList.map(({ processName, processText, processItems }, i) => (
            <ProcessItem
              key={i}
              title={processName}
              desc={processText}
              items={processItems}
              anim={
                i === 0
                  ? lotties.process_lottie_owl
                  : i === 1
                  ? lotties.process_lottie_hummingbird
                  : lotties.process_lottie_toucan
              }
            />
          ))}
      </div>
    </section>
  )
}

export default Process
