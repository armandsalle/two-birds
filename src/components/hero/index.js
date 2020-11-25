import React from "react"
import Button from "../button"

const Hero = ({ title, text, cta }) => {
  return (
    <section className="hero d-center-center">
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
