import React, { useRef, useEffect, useContext } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { AnimationContext } from "../../contexts/animationContext"
import reveal from "../../animations/reveal"

const Header = () => {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allLayouts {
            edges {
              node {
                siteLogo
              }
            }
          }
        }
      }
    `
  )
  const logoRef = useRef()
  const { animationsCanRuns } = useContext(AnimationContext)

  const { siteLogo } = prismic.allLayouts.edges.slice(0, 1).pop().node

  useEffect(() => {
    if (animationsCanRuns) {
      reveal(logoRef.current, logoRef.current, false, "70%")
    }
  }, [animationsCanRuns])

  return (
    <header className="mt-40 index-header" ref={logoRef} style={{ opacity: 0 }}>
      <div className="logo">
        <Link to="/">
          <img
            src={siteLogo?.url}
            alt="two birds logo"
            width={141}
            height={24}
          />
        </Link>
      </div>
    </header>
  )
}

export default Header
