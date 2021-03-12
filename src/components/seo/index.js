import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ meta, title, noIndex, image, description }) {
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
                twitterCard
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
    siteImage,
    twitterCard,
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
          content: description || siteDescription,
        },
        {
          property: `og:title`,
          content: title ? `${title} - ${siteTitle}` : `${siteTitle}`,
        },
        {
          property: `og:description`,
          content: description || siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image ? image.url : siteImage.url,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: twitterCard.url,
        },
        {
          name: `twitter:site`,
          content: siteTwitter,
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
          content: description || siteDescription,
        },
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://prismic-io.s3.amazonaws.com" />
      <link rel="preconnect" href="https://images.prismic.io" />
      <link rel="preconnect" href="https://twobirds.prismic.io" />
      {noIndex && <meta name="robots" content="noindex" />}
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
