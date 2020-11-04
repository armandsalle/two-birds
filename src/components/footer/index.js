import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SocialLink from "../scocialLink"

const Footer = () => {
  const { prismic } = useStaticQuery(
    graphql`
      query {
        prismic {
          allLayouts {
            edges {
              node {
                footerTwitter
                footerLinkedin
                footerInstagram
                footerFacebook
                footerDribbble
                footerBehance
                siteLogo
              }
            }
          }
        }
      }
    `
  )

  const {
    footerTwitter,
    footerLinkedin,
    footerInstagram,
    footerFacebook,
    footerDribbble,
    footerBehance,
    siteLogo,
  } = prismic.allLayouts.edges.slice(0, 1).pop().node

  return (
    <footer className="footer container mt-80 mb-80">
      <div className="footer__left">
        <div className="logo">
          <Link to="/">
            <img src={siteLogo?.url} alt="two birds logo" />
          </Link>
        </div>
        <span className="copywrite">Copyright © 2020 - twobirds</span>
      </div>
      <div className="footer__right">
        <div className="footer__social__links">
          {footerDribbble && <SocialLink to={footerDribbble} is="dribble" />}
          {footerBehance && <SocialLink to={footerBehance} is="behance" />}
          {footerTwitter && <SocialLink to={footerTwitter} is="twitter" />}
          {footerInstagram && (
            <SocialLink to={footerInstagram} is="instagram" />
          )}
          {footerFacebook && <SocialLink to={footerFacebook} is="facebook" />}
          {footerLinkedin && <SocialLink to={footerLinkedin} is="linkedin" />}
        </div>
        <div className="footer__links mt-16">
          <Link to="#">Parlez-vous français ?</Link>
          <Link to="#">Legal</Link>
          <Link to="#">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
