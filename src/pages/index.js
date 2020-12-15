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
        hero_lottie_plants,
        hero_lottie_plants_loop,
        hero_lottie_macaw,
        hero_lottie_macaw_loop,
        hero_lottie_cockatoo,
        hero_lottie_cockatoo_loop,
      },
    },
  },
}) {
  const heroLotties = [
    { plants: hero_lottie_plants },
    { plantsLoop: hero_lottie_plants_loop },
    { macaw: hero_lottie_macaw },
    { macawLoop: hero_lottie_macaw_loop },
    { cockatoo: hero_lottie_cockatoo },
    { cockatooLoop: hero_lottie_cockatoo_loop },
  ]

  useEffect(() => {
    document.querySelector(".get-back").style.display = "none"
  }, [])

  return (
    <>
      <SEO title="" />
      <Header />
      <Hero
        title={heroTitle}
        text={heroText}
        cta={heroCtaText}
        heroLotties={heroLotties}
      />
      <ProjectsList title={projectsTitle} projects={projectssList} />
      <Process title={processTitle} processList={processList} />
      <Trust title={trustTitle} text={trustText} birds={birds} />
      <Contact title={contactTitle} cta={contactCtaText} />
      <Footer />
    </>
  )
}

export const indexQuery = graphql`
  query indexPage {
    prismic {
      home(lang: "fr-fr", uid: "home") {
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          birdsImageLookingAt
          birdsImageLookingAtSharp {
            childImageSharp {
              fluid(maxWidth: 512, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          birdsImage
          birdsImageSharp {
            childImageSharp {
              fluid(maxWidth: 512, quality: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        contactTitle
        contactCtaText
        hero_lottie_plants {
          ... on PRISMIC__FileLink {
            url
          }
        }
        hero_lottie_plants_loop {
          ... on PRISMIC__FileLink {
            url
          }
        }
        hero_lottie_macaw {
          ... on PRISMIC__FileLink {
            url
          }
        }
        hero_lottie_macaw_loop {
          ... on PRISMIC__FileLink {
            url
          }
        }
        hero_lottie_cockatoo {
          ... on PRISMIC__FileLink {
            url
          }
        }
        hero_lottie_cockatoo_loop {
          ... on PRISMIC__FileLink {
            url
          }
        }
      }
    }
  }
`
