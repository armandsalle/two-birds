import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import reveal from "../../animations/reveal"
import gsap from "gsap/gsap-core"
import { useState } from "react"

const ProjectItem = ({ title, thumbnailSharp, thumbnail, tags, uid }) => {
  const linkRef = useRef(null)
  const [colors, setColors] = useState({})

  useEffect(() => {
    if (window !== "undefined") {
      const colorPink = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-pink")
      const colorBlack = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--color-black")

      setColors({
        pink: colorPink,
        black: colorBlack,
      })
    }
    reveal(linkRef.current, linkRef.current, true, "70%")
  }, [setColors])

  const mouseEnter = useCallback(() => {
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: colors.pink,
      duration: 0.2,
    })
    gsap.to(".cursor__span", {
      opacity: 1,
      duration: 0.2,
    })
  }, [colors])

  const mouseLeave = useCallback(() => {
    gsap.to(".cursor", {
      scale: 0.16,
      backgroundColor: colors.black,
      duration: 0.2,
    })
    gsap.to(".cursor__span", {
      opacity: 0,
      duration: 0.2,
    })
  }, [colors])

  return (
    <Link
      to={`/${uid}`}
      className="project-item-link "
      ref={linkRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={mouseLeave}
    >
      <div className="project-item-link__wrapper__image">
        {thumbnailSharp.fluid ? (
          <Img
            fluid={thumbnailSharp.fluid}
            alt={thumbnail?.alt}
            className="project-item-link__image"
            fadeIn={false}
          />
        ) : (
          <img
            src={thumbnail.url}
            alt={thumbnail?.alt}
            className="project-item-link__image"
          />
        )}
      </div>
      <h3 className="h3 mt-40">{title}</h3>
      <p className="color-grey mt-16">
        {tags.map(({ projectTag }, i) =>
          i === tags.length - 1 ? projectTag : projectTag + ", "
        )}
      </p>
    </Link>
  )
}

export default ProjectItem
