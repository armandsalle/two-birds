import React, { useEffect, useRef } from "react"
import ProjectItem from "./ProjectItem"
import Title from "../title"
import titleReveal from "../../animations/titleReveal"

const ProjectsList = ({ title, projects }) => {
  const projectSectionRef = useRef(null)

  useEffect(() => {
    const p = titleReveal(
      projectSectionRef.current.querySelector(".reveal-title"),
      projectSectionRef.current,
      false,
      "70%"
    )

    return () => {
      p.kill()
    }
  }, [])

  return (
    <section
      className="project-container container mt-160"
      ref={projectSectionRef}
    >
      <div className="projects-list">
        <Title className="h2" as="h2">
          {title}
        </Title>
        {projects.map(
          (
            {
              projectsItem: {
                _meta: { uid, lang },
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
              lang={lang}
            />
          )
        )}
      </div>
    </section>
  )
}

export default ProjectsList
