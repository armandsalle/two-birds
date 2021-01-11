import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Hero from "../components/hero"
import Process from "../components/process"
import ProjectsList from "../components/projectsList"
import Trust from "../components/trust"
import Contact from "../components/contact"
import Footer from "../components/footer"
import SEO from "../components/seo"

export default function Home({
  data: {
    prismic: {
      home: {
        heroTitle,
        heroText,
        heroCtaText,
        processTitle,
        processList,
        projectsTitle,
        projectssList,
        trustText,
        trustTitle,
        birds,
        contactTitle,
        contactCtaText,
      },
    },
  },
  pageContext,
}) {
  useEffect(() => {
    document.querySelector(".get-back").style.display = "none"
  }, [])

  return (
    <>
      <SEO title="" />
      <Header />
      <Hero title={heroTitle} text={heroText} cta={heroCtaText} />
      <ProjectsList title={projectsTitle} projects={projectssList} />
      <Process title={processTitle} processList={processList} />
      <Trust title={trustTitle} text={trustText} birds={birds} />
      <Contact title={contactTitle} cta={contactCtaText} />
      <Footer lang={pageContext.lang} />
    </>
  )
}

export const indexQuery = graphql`
  query indexPage($lang: String!) {
    prismic {
      home(lang: $lang, uid: "home") {
        heroTitle
        heroText
        heroCtaText
        processTitle
        processList {
          processItems
          processName
          processText
        }
        projectsTitle
        projectssList {
          projectsItem {
            ... on PRISMIC_Projects {
              _meta {
                uid
                lang
              }
              projectName
              projectTags {
                projectTag
              }
              projectThumbnail
              projectThumbnailSharp {
                childImageSharp {
                  fluid(maxWidth: 488, quality: 70) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        trustTitle
        trustText
        birds {
          birdsTwitter
          birdsText
          birdsName
          birdsLinkedin
          birdsInstagram
          birdsImageHover
          birdsImageHoverSharp {
            childImageSharp {
              fluid(maxWidth: 512, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          birdsImageLookingAt
          birdsImageLookingAtSharp {
            childImageSharp {
              fluid(maxWidth: 512, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          birdsImage
          birdsImageSharp {
            childImageSharp {
              fluid(maxWidth: 512, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
        contactTitle
        contactCtaText
      }
    }
  }
`
