import React from "react"
import CustomRichText from "../richText"
import Title from "../title"
import VisitLink from "./VisitLink"

const ProjectHeader = ({
  infos: {
    projectTitleRich,
    projectLogoSvg,
    preojectDescription,
    projectLink,
    titleLink,
    projectTags,
    projectDate,
  },
}) => {
  const img = () => ({ __html: projectLogoSvg })

  return (
    <header className="container mt-240 project-header">
      <div className="project-header__img-wrapper">
        <div className="project-header__logo" dangerouslySetInnerHTML={img()} />
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
