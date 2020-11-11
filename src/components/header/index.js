import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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

  const { siteLogo } = prismic.allLayouts.edges.slice(0, 1).pop().node

  return (
    <header className="mt-40 index-header">
      <div className="logo">
        <Link to="/">
          <img src={siteLogo?.url} alt="two birds logo" />
        </Link>
      </div>
    </header>
  )
}

export default Header
