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
import projectEnter from "../animations/projectEnter"

const Project = ({
  data: {
    prismic: { allProjects },
  },
  pageContext: { uid },
}) => {
  const { animationsCanRuns, setExitAnimation } = useContext(AnimationContext)

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
    projectLogoSvg,
    preojectDescription,
    projectLink,
    projectTags,
    projectDate,
    titleLink,
    contactTitle,
    contactCta,
    body,
    seoDesscription,
    seoImageSharp,
  } = projectssList[currId].projectsItem

  const nextProject = projectssList[nextProjectId].projectsItem

  useEffect(() => {
    document.querySelector(".get-back").style.display = "flex"
  }, [])

  useEffect(() => {
    const tl = projectEnter(animationStatut)

    if (animationsCanRuns) {
      tl.play()
      setAnimation("ORIGINAL")
      setTimeout(() => {
        gsap.to(".project-patch", { opacity: 0, display: "none" })
      }, 200)
    }

    return () => {
      setExitAnimation("opacity")
    }
  }, [animationsCanRuns, setExitAnimation])

  return (
    <>
      <SEO
        title={projectName}
        description={seoDesscription}
        image={seoImageSharp}
      />

      <ProjectHeader
        infos={{
          projectTitleRich,
          projectLogoSvg,

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
      <Contact title={contactTitle} cta={contactCta} isProject={true} />
      <div className="line"></div>
      <ProjectTransition nextProject={nextProject} />
    </>
  )
}

export const projectQuery = graphql`
  query projectPage($lang: String!) {
    prismic {
      allProjects: home(lang: $lang, uid: "home") {
        projectssList {
          projectsItem {
            ... on PRISMIC_Projects {
              _meta {
                uid
                lang
              }
              projectLogoSvg
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
              seoDesscription
              seoImage
              seoImageSharp {
                childImageSharp {
                  fixed(width: 1200, height: 630, quality: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
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
                ... on PRISMIC_ProjectsBodyVideo_youtube {
                  type
                  primary {
                    youtubeLink {
                      ... on PRISMIC__ExternalLink {
                        url
                      }
                    }
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
