import React, { useEffect, useState } from "react"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import { gsap } from "gsap"
import SEO from "../components/seo"
import ProjectSlices from "../components/projectSlices"
import FooterProject from "../components/footerProject"
// import { AnimationContext } from "../contexts/animationContext"
import ProjectHeader from "../components/projectHeader"
import ProjectNav from "../components/projectNav"

const Project = ({
  data: {
    prismic: { layout, allProjects },
  },
  pageContext: { uid },
}) => {
  // const { projectAnimationCanRuns, setProjectAnimationCanRuns } = useContext(
  //   AnimationContext
  // )

  const {
    footerTwitter,
    footerLinkedin,
    footerInstagram,
    footerFacebook,
    footerDribbble,
    footerBehance,
  } = layout.edges.slice(0, 1).pop().node

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
    body,
  } = projectssList[currId].projectsItem

  const nextProject = projectssList[nextProjectId].projectsItem

  const [headerRect, setHeaderRect] = useState()

  useEffect(() => {
    const haederRect = document
      .querySelector(".project-header")
      .getBoundingClientRect()

    setHeaderRect(haederRect.y)
  }, [setHeaderRect])

  useEffect(() => {
    const navigateToNextProject = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector("body").style.overflowY = "hidden"

        const transitionContainerRect = document
          .querySelector(".project-transition .container")
          .getBoundingClientRect()

        const ydDiff = transitionContainerRect.y - headerRect
        const tl = gsap.timeline()

        tl.to(".project-header, .all-slices, footer", {
          opacity: 0,
          duration: 1,
        })
        // tl.to(
        //   ".get-back",

        //   {
        //     opacity: 0,
        //     y: -80,
        //     duration: 1,
        //   },
        //   0
        // )
        tl.to(".line", { opacity: 0 }, 0)
        tl.to(
          ".project-transition__bg",
          {
            scaleY: 4,
            duration: 1,
          },
          0
        )
        tl.to(
          ".project-transition .container",
          {
            duration: 1.5,
            y: -ydDiff,
            onComplete: () => {
              navigate("/" + nextProject._meta.uid)
            },
          },
          0
        )
      }
    }

    window.addEventListener("scroll", navigateToNextProject)

    return () => {
      window.removeEventListener("scroll", navigateToNextProject)
    }
  }, [nextProject._meta.uid, headerRect])

  useEffect(() => {
    const tl = gsap.timeline({
      ease: "Quad.easeOut",
    })

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
      ".project-header__title span",
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
      0.6
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
      0.9
    )
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
  }, [])

  return (
    <>
      <SEO title={projectName} />
      <ProjectNav />
      <ProjectHeader
        infos={{
          projectTitleRich,
          projectLogo,
          projectLogoSharp,
          preojectDescription,
          projectLink,
          projectTags,
          projectDate,
        }}
      />
      <div className="all-slices">
        <ProjectSlices slices={body} />
      </div>
      <FooterProject
        dribbble={footerDribbble}
        behance={footerBehance}
        twitter={footerTwitter}
        instagram={footerInstagram}
        facebook={footerFacebook}
        linkedin={footerLinkedin}
      />
      <div className="line"></div>
      <section className="project-transition">
        <div className="project-transition__bg"></div>
        <div className="container" style={{ zIndex: 8, position: "relative" }}>
          {nextProject.projectLogoSharp.fluid ? (
            <Img
              fluid={nextProject.projectLogoSharp.fluid}
              alt={nextProject.projectLogo?.alt}
              className="project-transition__logo"
              fadeIn={false}
            />
          ) : (
            <img
              src={nextProject.projectLogo.url}
              alt={nextProject.projectLogo?.alt}
              className="project-transition__logo"
            />
          )}
          <h1 className="h2 mt-16">
            {nextProject.projectTitleRich.map((t, i) => (
              <span key={i}>{t.text}</span>
            ))}
          </h1>
        </div>
      </section>
    </>
  )
}

export const projectQuery = graphql`
  query projectPage {
    prismic {
      layout: allLayouts {
        edges {
          node {
            footerTwitter
            footerLinkedin
            footerInstagram
            footerFacebook
            footerDribbble
            footerBehance
          }
        }
      }
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
                    ...GatsbyImageSharpFluid_withWebp_noBase64
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
              body {
                ... on PRISMIC_ProjectsBodyImage_full {
                  type
                  primary {
                    imageFull
                    imageFullSharp {
                      childImageSharp {
                        fluid(maxWidth: 1920, quality: 70) {
                          ...GatsbyImageSharpFluid_withWebp_noBase64
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
                          ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                      }
                    }
                    rightImage
                    rightImageSharp {
                      childImageSharp {
                        fluid(maxWidth: 944, quality: 70) {
                          ...GatsbyImageSharpFluid_withWebp_noBase64
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
