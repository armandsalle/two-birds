import React, { useEffect, useRef } from "react"
import ProjectItem from "./ProjectItem"
import reveal from "../../animations/reveal"

const ProjectsList = ({ title, projects }) => {
  const titleRef = useRef(null)
  const projectSectionRef = useRef(null)

  useEffect(() => {
    reveal(titleRef.current, projectSectionRef.current, false)
  }, [])

  return (
    <section className="container mt-240" ref={projectSectionRef}>
      <div className="projects-list">
        <h2 className="h2 ty-80 opacity-0" ref={titleRef}>
          {title}
        </h2>
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
