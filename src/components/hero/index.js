import React from "react"
import Button from "../button"

const Hero = () => {
  return (
    <section className="hero d-center-center">
      <div className="container d-between-center">
        <div className="hero__left">
          <h1 className="h1">Your products, with wings.</h1>
          <p className="hero__text">
            We help companies to create experiences for their users, from the
            initial idea to the final product.
          </p>
          <Button to="#" className="mt-48 d-center-center">
            Contact us
          </Button>
        </div>
        <div className="hero__right"></div>
      </div>
    </section>
  )
}

export default Hero
