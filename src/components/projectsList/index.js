import React from "react"
import ProjectItem from "./ProjectItem"

const ProjectsList = ({ title, projects }) => {
  return (
    <section className="container mt-240 ">
      <div className="projects-list">
        <h2 className="h2">{title}</h2>
        {projects.map(
          (
            {
              projectsItem: {
                _meta: { uid },
                projectName,
                projectTags,
                projectThumbnail,
                projectThumbnailSharp,
              },
            },
            i
          ) => (
            <ProjectItem
              key={i}
              title={projectName}
              tags={projectTags}
              thumbnailSharp={projectThumbnailSharp}
              thumbnail={projectThumbnail}
              uid={uid}
            />
          )
        )}
      </div>
    </section>
  )
}

export default ProjectsList
