import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import CustomRichText from "../richText"
import Title from "../title"

const ProjectHeader = ({
  infos: {
    projectTitleRich,
    projectLogo,
    projectLogoSharp,
    preojectDescription,
    projectLink,
    projectTags,
    projectDate,
  },
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window !== "undefined") {
      if (window.matchMedia("screen and (max-width: 478px)").matches) {
        setIsMobile(true)
      }
    }
  }, [setIsMobile])

  return (
    <header className="container mt-240 project-header">
      {projectLogoSharp.fluid ? (
        <Img
          fluid={projectLogoSharp.fluid}
          alt={projectLogo?.alt}
          className="project-header__logo"
          fadeIn={false}
        />
      ) : (
        <img
          src={projectLogo.url}
          alt={projectLogo?.alt}
          className="project-header__logo"
        />
      )}
      <h1 className="h2 mt-16 project-header__title">
        {isMobile ? (
          <Title as="span">{projectTitleRich.map(e => e.text).join(" ")}</Title>
        ) : (
          projectTitleRich.map((t, i) => (
            <Title key={i} as="span">
              {t.text}
            </Title>
          ))
        )}
      </h1>
      <CustomRichText
        data={preojectDescription}
        isText
        className="project-header__description"
      />
      <div className="project-header__infos mt-40">
        <div className="project-header__visit-link">
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noreferrer">
              <span>Visit website</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6667 12.6667H3.33333V3.33333H8V2H3.33333C2.59667 2 2 2.59667 2 3.33333V12.6667C2 13.4033 2.59667 14 3.33333 14H12.6667C13.4033 14 14 13.4033 14 12.6667V8H12.6667V12.6667ZM9.33333 2V3.33333H11.7233L5.17 9.88667L6.11333 10.83L12.6667 4.27667V6.66667H14V2H9.33333Z"
                  fill="#5E5E67"
                />
              </svg>
            </a>
          )}
        </div>
        <div className="project-header__tags">
          {projectTags &&
            projectTags.map(({ projectTag }, i) => (
              <div key={i} className="project-header__tag">
                {projectTag}
              </div>
            ))}
        </div>
        <div className="project-header__date">{projectDate}</div>
      </div>
    </header>
  )
}

export default ProjectHeader
