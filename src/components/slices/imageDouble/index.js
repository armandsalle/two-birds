import React, { useEffect, useRef } from "react"
import Img from "gatsby-image"
import { gsap } from "gsap"

const ImageDouble = ({ primary }) => {
  const { leftImageSharp, leftImage, rightImage, rightImageSharp } = primary
  const imageDoubleRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      imageDoubleRef.current.querySelectorAll(
        ".slice-image-double__left, .slice-image-double__right"
      ),
      {
        opacity: 0,
        y: 80,
      },
      {
        scrollTrigger: {
          trigger: imageDoubleRef.current,
          start: () => `top 70%`,
        },
        opacity: 1,
        y: 0,
        stagger: 0.3,
        ease: "Quad.easeOut",
      }
    )
  }, [])

  return (
    <section className="slice-image-double mb-32" ref={imageDoubleRef}>
      <Img
        fluid={leftImageSharp.childImageSharp.fluid}
        fadeIn={false}
        alt={leftImage?.alt}
        className="slice-image-double__left"
      />
      <Img
        fluid={rightImageSharp.childImageSharp.fluid}
        fadeIn={false}
        alt={rightImage?.alt}
        className="slice-image-double__right"
      />
    </section>
  )
}

export default ImageDouble
