import React, { useEffect, useRef } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import reveal from "../../animations/reveal"
import { mouseEnter, mouseLeave, mouseClick } from "../../animations/cursor"

const ProjectItem = ({ title, thumbnailSharp, thumbnail, tags, uid }) => {
  const linkRef = useRef(null)

  useEffect(() => {
    reveal(linkRef.current, linkRef.current, true, "70%")
  }, [])

  return (
    <Link
      to={`/${uid}`}
      className="project-item-link "
      ref={linkRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={mouseClick}
      name={title}
      aria-label={title}
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
