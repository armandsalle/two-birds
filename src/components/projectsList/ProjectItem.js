import { Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const ProjectItem = ({ title, thumbnailSharp, thumbnail, tags, uid }) => {
  return (
    <Link to={`/${uid}`} className="project-item-link">
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
