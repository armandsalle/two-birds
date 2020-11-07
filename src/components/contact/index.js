import React, { useEffect, useRef } from "react"
import Button from "../button"
import { gsap } from "gsap"

const Contact = ({ title, cta }) => {
  const sectionRef = useRef()
  const contentRef = useRef()

  useEffect(() => {
    const title = contentRef.current.querySelector(".h2")
    const btn = contentRef.current.querySelector(".btn")

    const tl = gsap.timeline({
      ease: "Quad.easeOut",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: () => `top 70%`,
      },
    })
    tl.to(sectionRef.current, {
      opacity: 1,
      y: 0,
      duration: 2,
    })
    tl.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
    tl.to(
      btn,
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1,
      },
      "-=1"
    )
  }, [])

  return (
    <section
      className="contact container mt-240 ty-80 opacity-0"
      ref={sectionRef}
    >
      <div className="contact__content" ref={contentRef}>
        <h2 className="h2 text-center ty-80 opacity-0">{title}</h2>
        <Button to="#" className="mt-40 btn ty-80 opacity-0">
          {cta}
        </Button>
      </div>
    </section>
  )
}

export default Contact
