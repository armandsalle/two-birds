import { Link } from "gatsby"
import React, { useCallback } from "react"
import { gsap } from "gsap"
import { useStaticQuery, graphql } from "gatsby"
import SocialLink from "../scocialLink"
import { socialEnter, socialLeave } from "../../animations/cursor"
import useCreateLink from "../../hooks/useCreateLink"
import useIsTouchDesign from "../../hooks/useIsTouchDesign"

const Footer = ({ lang }) => {
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
                footerDribbble
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
    footerDribbble,
    siteLogo,
  } = prismic.allLayouts.edges.slice(0, 1).pop().node

  const isTouchDevice = useIsTouchDesign()

  const createLink = useCreateLink(lang, "legals")

  const mouseEnterLink = useCallback(() => {
    if (!isTouchDevice) {
      gsap.to(".cursor", {
        scale: 0,
        duration: 0.2,
      })
    }
  }, [isTouchDevice])

  const mouseLeaveLink = useCallback(() => {
    if (!isTouchDevice) {
      gsap.to(".cursor", {
        scale: 0.2,
        duration: 0.2,
      })
    }
  }, [isTouchDevice])

  return (
    <footer className="footer container mt-80 mb-80">
      <div className="footer__left">
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
        <span className="copywrite">Copyright © 2021 - twobirds.</span>
      </div>
      <div className="footer__right">
        <div className="footer__social__links">
          {footerDribbble && <SocialLink to={footerDribbble} is="dribble" />}
          {footerTwitter && <SocialLink to={footerTwitter} is="twitter" />}
          {footerInstagram && (
            <SocialLink to={footerInstagram} is="instagram" />
          )}
          {footerLinkedin && <SocialLink to={footerLinkedin} is="linkedin" />}
        </div>
        <div className="footer__links mt-16">
          <Link
            to="/fr"
            onMouseEnter={mouseEnterLink}
            onMouseLeave={mouseLeaveLink}
          >
            Parlez-vous français ?
          </Link>
          <Link
            to={createLink}
            onMouseEnter={mouseEnterLink}
            onMouseLeave={mouseLeaveLink}
          >
            Legal
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
