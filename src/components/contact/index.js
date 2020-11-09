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
    tl.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
    tl.fromTo(
      title,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    )
    tl.fromTo(
      btn,
      { opacity: 0, y: 80 },
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
    <section className="contact container mt-240" ref={sectionRef}>
      <div className="contact__content" ref={contentRef}>
        <h2 className="h2 text-center">{title}</h2>
        <Button to="#" className="mt-40 btn">
          {cta}
        </Button>
      </div>
    </section>
  )
}

export default Contact
