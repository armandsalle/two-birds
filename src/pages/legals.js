import React, { useEffect, useContext } from "react"
import { graphql } from "gatsby"
import { gsap } from "gsap"
import { AnimationContext } from "../contexts/animationContext"
import CustomRichText from "../components/richText"
import SEO from "../components/seo"

const Legals = ({
  data: {
    prismic: {
      legals: { contentList },
    },
  },
}) => {
  const { animationsCanRuns } = useContext(AnimationContext)

  useEffect(() => {
    document.querySelector(".get-back").style.display = "flex"

    gsap.set(".get-back", { opacity: 0, y: -80 })

    if (animationsCanRuns) {
      gsap.to(".get-back", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      })
    }
  }, [animationsCanRuns])

  return (
    <>
      <SEO title="Legals" noIndex={true} />
      <section className="legals container container--small">
        {contentList.map(({ content }, i) => (
          <CustomRichText
            data={content}
            className="legals__content"
            isText={true}
            key={i}
          />
        ))}
      </section>
    </>
  )
}

export default Legals

export const legalsQuery = graphql`
  query legalsPage {
    prismic {
      legals(lang: "fr-fr", uid: "legals") {
        contentList {
          content
        }
      }
    }
  }
`
