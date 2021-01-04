import React from "react"
import Img from "gatsby-image"
import CustomRichText from "../richText"
import Title from "../title"
import VisitLink from "./VisitLink"

const ProjectHeader = ({
  infos: {
    projectTitleRich,
    projectLogo,
    projectLogoSharp,
    preojectDescription,
    projectLink,
    titleLink,
    projectTags,
    projectDate,
  },
}) => {
  return (
    <header className="container mt-240 project-header">
      <div className="project-header__img-wrapper">
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
            width={100}
            height={32}
          />
        )}
      </div>
      <h1 className="h2 mt-16 project-header__title">
        {projectTitleRich.map((t, i) => (
          <Title key={i} as="span">
            {t.text}
          </Title>
        ))}
      </h1>
      <CustomRichText
        data={preojectDescription}
        isText
        className="project-header__description"
      />
      <div className="project-header__infos mt-40">
        <VisitLink projectLink={projectLink} title={titleLink} />
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
