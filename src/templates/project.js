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
    prismic: { currentProject, homeProjects },
  },
  pageContext: { uid, lang },
}) => {
  const { projectssList } = homeProjects

  let isProjectOnTheHomePage = false
  const homeProjectsUids = projectssList.map(e => e.projectsItem._meta.uid)

  if (homeProjectsUids.includes(uid)) {
    isProjectOnTheHomePage = true
  }

  let currId = 0

  projectssList.forEach((pr, i) => {
    if (pr.projectsItem._meta.uid === uid) {
      currId = i
    }
  })

  const nextProjectId = currId + 1 > projectssList.length - 1 ? 0 : currId + 1
  const nextProject = projectssList[nextProjectId].projectsItem

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
    seoImage,
  } = currentProject

  const { animationsCanRuns, setExitAnimation } = useContext(AnimationContext)

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
        image={seoImage}
        noIndex={!isProjectOnTheHomePage}
        lang={lang}
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
      {isProjectOnTheHomePage && (
        <>
          <div className="line"></div>
          <ProjectTransition nextProject={nextProject} />
        </>
      )}
      {!isProjectOnTheHomePage && <div style={{ height: "20vh" }}></div>}
    </>
  )
}

export const projectQuery = graphql`
  query projectPage($lang: String!, $uid: String!) {
    prismic {
      homeProjects: home(lang: $lang, uid: "home") {
        projectssList {
          projectsItem {
            ... on PRISMIC_Projects {
              _meta {
                uid
                lang
              }
              projectLogoSvg
              projectTitleRich
            }
          }
        }
      }
      currentProject: projects(lang: $lang, uid: $uid) {
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
`

export default Project
