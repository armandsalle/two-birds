import React, { useRef, useEffect } from "react"
import Img from "gatsby-image"
import reveal from "../../../animations/reveal"

const ImageFull = ({ primary }) => {
  const { imageFullSharp, imageFull } = primary
  const imageFullRef = useRef()

  useEffect(() => {
    reveal(imageFullRef.current, imageFullRef.current, false, "70%")
  }, [])

  return (
    <section className="slice-image-full mb-32" ref={imageFullRef}>
      {
        <Img
          fluid={imageFullSharp.childImageSharp.fluid}
          fadeIn={false}
          alt={imageFull?.alt}
          className="slice-image-full__image"
        />
      }
    </section>
  )
}

export default ImageFull
