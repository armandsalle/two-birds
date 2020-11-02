import { Link } from "gatsby"
import React from "react"

const ProjectItem = ({ title, desc }) => {
  return (
    <Link to="#" className="project-item-link">
      <div className="project-item-link__image"></div>
      <h3 className="h3 mt-40">{title}</h3>
      <p className="color-grey mt-16">{desc}</p>
    </Link>
  )
}

export default ProjectItem
