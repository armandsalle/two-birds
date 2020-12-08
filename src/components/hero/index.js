import React, { useRef, useEffect } from "react"
import { gsap } from "gsap/gsap-core"
import Button from "../button"

const Hero = ({ title, text, cta }) => {
  const heroRef = useRef(null)

  useEffect(() => {
    const title = heroRef.current.querySelector(".h1")
    const text = heroRef.current.querySelector(".hero__text")
    const button = heroRef.current.querySelector("a")

    gsap.fromTo(
      [title, text, button],
      {
        opacity: 0,
        y: 80,
      },
      {
        scrollTrigger: {
          trigger: heroRef.current,
          start: () => `top 70%`,
        },
        opacity: 1,
        y: 0,
        ease: "Quad.easeOut",
        duration: 1,
        stagger: {
          amount: 0.2,
        },
      }
    )
  }, [])

  return (
    <section className="hero d-center-center" ref={heroRef}>
      <div className="container d-between-center">
        <div className="hero__left">
          <h1 className="h1">{title}</h1>
          <p className="hero__text">{text}</p>
          <Button
            to="mailto:bonjour@twobirds.design?subject=On%20vole%20ensemble%20?"
            as="a"
            className="mt-48 d-center-center"
          >
            {cta}
          </Button>
        </div>
        <div className="hero__right"></div>
      </div>
    </section>
  )
}

export default Hero
