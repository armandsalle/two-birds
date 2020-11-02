import React from "react"
import ProjectItem from "./ProjectItem"

const ProjectsList = ({ projects }) => {
  return (
    <section className="container mt-240">
      <div className="projects-list">
        <h2 className="h2">What we've worked on</h2>
        {projects.map(({ id, title, desc }) => (
          <ProjectItem key={id} title={title} desc={desc} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsList
