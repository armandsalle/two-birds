import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ meta, title }) {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allLayouts {
            edges {
              node {
                siteTwitter
                siteTitle
                siteDescription
                siteAuthors
                siteImage
                siteImageSharp {
                  childImageSharp {
                    fixed(width: 1200, height: 630, quality: 100) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const {
    siteTitle,
    siteDescription,
    siteTwitter,
    siteImageSharp,
  } = prismic.allLayouts.edges.slice(0, 1).pop().node

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={siteTitle}
      titleTemplate={title ? `${title} - ${siteTitle}` : `${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: siteDescription,
        },
        {
          property: `og:title`,
          content: siteTitle,
        },
        {
          property: `og:description`,
          content: siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: siteImageSharp.childImageSharp.fixed.src,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteTwitter,
        },
        {
          name: `twitter:title`,
          content: siteTitle,
        },
        {
          name: `twitter:description`,
          content: siteDescription,
        },
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://prismic-io.s3.amazonaws.com" />
      <link rel="preconnect" href="https://images.prismic.io" />
      <link rel="preconnect" href="https://twobirds.prismic.io" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
