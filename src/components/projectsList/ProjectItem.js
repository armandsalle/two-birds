import React, { useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import reveal from "../../animations/reveal"
import gsap from "gsap/gsap-core"

const ProjectItem = ({ title, thumbnailSharp, thumbnail, tags, uid }) => {
  const linkRef = useRef(null)
  const colorPink = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-pink"
  )
  const colorBack = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-black"
  )

  useEffect(() => {
    reveal(linkRef.current, linkRef.current, true, "70%")
  }, [])

  const mouseEnter = useCallback(() => {
    gsap.to(".cursor", {
      scale: 1,
      backgroundColor: colorPink,
      duration: 0.2,
    })
    gsap.to(".cursor__span", {
      opacity: 1,
      duration: 0.2,
    })
  }, [colorPink])

  const mouseLeave = useCallback(() => {
    gsap.to(".cursor", {
      scale: 0.16,
      backgroundColor: colorBack,
      duration: 0.2,
    })
    gsap.to(".cursor__span", {
      opacity: 0,
      duration: 0.2,
    })
  }, [colorBack])

  return (
    <Link
      to={`/${uid}`}
      className="project-item-link ty-80 opacity-0"
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
