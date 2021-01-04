import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import SEO from "../components/seo"
import ProjectSlices from "../components/projectSlices"
import ProjectHeader from "../components/projectHeader"
import ProjectTransition from "../components/projectTransition"
import { animationStatut, setAnimation } from "../contexts/animationState"
import { AnimationContext } from "../contexts/animationContext"
import Contact from "../components/contact"

const Project = ({
  data: {
    prismic: { allProjects },
  },
  pageContext: { uid },
}) => {
  const { animationsCanRuns } = useContext(AnimationContext)

  const { projectssList } = allProjects

  let currId = 0

  projectssList.forEach((pr, i) => {
    if (pr.projectsItem._meta.uid === uid) {
      currId = i
    }
  })

  const nextProjectId = currId + 1 > projectssList.length - 1 ? 0 : currId + 1

  const {
    projectName,
    projectTitleRich,
    projectLogo,
    projectLogoSharp,
    preojectDescription,
    projectLink,
    projectTags,
    projectDate,
    titleLink,
    contactTitle,
    contactCta,
    body,
  } = projectssList[currId].projectsItem

  const nextProject = projectssList[nextProjectId].projectsItem

  useEffect(() => {
    document.querySelector(".get-back").style.display = "flex"
  }, [])

  useEffect(() => {
    if (animationStatut === "TRANSITION") {
      gsap.set(".get-back", {
        opacity: 1,
        y: 0,
      })
      gsap.set(".project-header__logo", {
        opacity: 1,
        y: 0,
      })
      gsap.set(".project-header__title .reveal-title .line__inner", {
        y: "0%",
        rotateX: 0,
        opacity: 1,
      })
    }

    const tl = gsap.timeline({
      ease: "Quad.easeOut",
      paused: true,
    })

    if (animationStatut === "ORIGINAL") {
      tl.fromTo(
        ".project-header__logo",
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        }
      ).fromTo(
        ".project-header__title .reveal-title .line__inner",
        {
          y: "100%",
          rotateX: "-40deg",
          opacity: 0,
        },
        {
          y: "0%",
          rotateX: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.13,
        },
        0.3
      )
    }

    tl.fromTo(
      ".project-header__description",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      },
      animationStatut === "ORIGINAL" ? 0.6 : 0
    ).fromTo(
      ".project-header__date, .project-header__tags, .project-header__visit-link",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
      },
      animationStatut === "ORIGINAL" ? 0.9 : 0.3
    )

    if (animationStatut === "ORIGINAL") {
      tl.fromTo(
        ".get-back",
        { opacity: 0, y: -80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        1.8
      )
    }
    if (animationsCanRuns) {
      tl.play()
      setAnimation("ORIGINAL")
    }
  }, [animationsCanRuns])

  return (
    <>
      <SEO title={projectName} />

      <ProjectHeader
        infos={{
          projectTitleRich,
          projectLogo,
          projectLogoSharp,
          preojectDescription,
          projectLink,
          titleLink,
          projectTags,
          projectDate,
        }}
      />
      <div className="all-slices">
        <ProjectSlices slices={body} />
      </div>
      <Contact title={contactTitle} cta={contactCta} />
      <div className="line"></div>
      <ProjectTransition nextProject={nextProject} />
    </>
  )
}

export const projectQuery = graphql`
  query projectPage {
    prismic {
      allProjects: home(lang: "fr-fr", uid: "home") {
        projectssList {
          projectsItem {
            ... on PRISMIC_Projects {
              _meta {
                uid
              }
              projectLogo
              projectLogoSharp {
                childImageSharp {
                  fluid(maxWidth: 64, quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              projectTitleRich
              projectName
              preojectDescription
              projectLink
              projectTags {
                projectTag
              }
              projectDate
              titleLink
              contactTitle
              contactCta
              body {
                ... on PRISMIC_ProjectsBodyImage_full {
                  type
                  primary {
                    imageFull
                    imageFullSharp {
                      childImageSharp {
                        fluid(maxWidth: 1920, quality: 70) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_ProjectsBodyImage_double {
                  type
                  primary {
                    leftImage
                    leftImageSharp {
                      childImageSharp {
                        fluid(maxWidth: 944, quality: 70) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                    rightImage
                    rightImageSharp {
                      childImageSharp {
                        fluid(maxWidth: 944, quality: 70) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_ProjectsBodyNumbers {
                  type
                  fields {
                    numberText
                    numberTitle
                  }
                }
                ... on PRISMIC_ProjectsBodyDescription {
                  type
                  primary {
                    description
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Project
