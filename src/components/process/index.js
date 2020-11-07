import React, { useEffect, useRef } from "react"
import ProcessItem from "./ProcessItem"
import { gsap } from "gsap"
import reveal from "../../animations/reveal"

const Process = ({ title, processList }) => {
  const titleRef = useRef(null)
  const processSectionRef = useRef(null)

  useEffect(() => {
    const processItems = gsap.utils.toArray(".process-item")

    reveal(titleRef.current, processSectionRef.current, false, "70%")

    gsap.to(processItems, {
      scrollTrigger: {
        trigger: processItems[0],
        start: () => `-=80 70%`,
      },
      opacity: 1,
      y: 0,
      stagger: {
        amount: 0.2,
      },
      ease: "Quad.easeOut",
    })
  }, [])

  return (
    <section className="process container mt-240" ref={processSectionRef}>
      <h2 className="h2 ty-80 opacity-0" ref={titleRef}>
        {title}
      </h2>
      <div className="process-list mt-80">
        {processList.map(({ processName, processText, processItems }, i) => (
          <ProcessItem
            key={i}
            title={processName}
            desc={processText}
            items={processItems}
          />
        ))}
      </div>
    </section>
  )
}

export default Process
