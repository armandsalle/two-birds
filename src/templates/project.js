import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { gsap } from "gsap"
import SEO from "../components/seo"
import CustomRichText from "../components/richText"
import ProjectSlices from "../components/projectSlices"
import FooterProject from "../components/footerProject"

const Project = ({
  data: {
    prismic: { layout, allProjects },
  },
  pageContext: { uid },
}) => {
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
    )
      .fromTo(
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
      .fromTo(
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
      )
      .fromTo(
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
      .fromTo(
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
      <nav className="get-back">
        <Link to="/">
          <svg
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.3327 8.53341L23.466 6.66675L15.9993 14.1334L8.53268 6.66675L6.66602 8.53341L14.1327 16.0001L6.66602 23.4667L8.53268 25.3334L15.9993 17.8667L23.466 25.3334L25.3327 23.4667L17.866 16.0001L25.3327 8.53341Z"
              fill="black"
            />
          </svg>
        </Link>
      </nav>
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
          {projectTitleRich.map((t, i) => (
            <span key={i}>{t.text}</span>
          ))}
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
      <ProjectSlices slices={body} />
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
        <div className="container">
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
      # project: projects(uid: $uid, lang: "fr-fr") {
      #   projectLogo
      #   projectLogoSharp {
      #     childImageSharp {
      #       fluid(maxWidth: 64, quality: 70) {
      #         ...GatsbyImageSharpFluid_withWebp_noBase64
      #       }
      #     }
      #   }
      #   projectTitleRich
      #   projectName
      #   preojectDescription
      #   projectLink
      #   projectTags {
      #     projectTag
      #   }
      #   projectDate
      #   body {
      #     ... on PRISMIC_ProjectsBodyImage_full {
      #       type
      #       primary {
      #         imageFull
      #         imageFullSharp {
      #           childImageSharp {
      #             fluid(maxWidth: 1920, quality: 70) {
      #               ...GatsbyImageSharpFluid_withWebp_noBase64
      #             }
      #           }
      #         }
      #       }
      #     }
      #     ... on PRISMIC_ProjectsBodyImage_double {
      #       type
      #       primary {
      #         leftImage
      #         leftImageSharp {
      #           childImageSharp {
      #             fluid(maxWidth: 944, quality: 70) {
      #               ...GatsbyImageSharpFluid_withWebp_noBase64
      #             }
      #           }
      #         }
      #         rightImage
      #         rightImageSharp {
      #           childImageSharp {
      #             fluid(maxWidth: 944, quality: 70) {
      #               ...GatsbyImageSharpFluid_withWebp_noBase64
      #             }
      #           }
      #         }
      #       }
      #     }
      #     ... on PRISMIC_ProjectsBodyNumbers {
      #       type
      #       fields {
      #         numberText
      #         numberTitle
      #       }
      #     }
      #     ... on PRISMIC_ProjectsBodyDescription {
      #       type
      #       primary {
      #         description
      #       }
      #     }
      #   }
      # }
    }
  }
`

export default Project
