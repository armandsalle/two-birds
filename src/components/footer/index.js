import { Link } from "gatsby"
import React from "react"
import Logo from "../logo"
import SocialLink from "../scocialLink"

const Footer = () => {
  return (
    <footer className="footer container mt-80 mb-80">
      <div className="footer__left">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <span className="copywrite">Copyright © 2020 - twobirds</span>
      </div>
      <div className="footer__right">
        <div className="footer__social__links">
          <SocialLink to="#" is="dribble" />
          <SocialLink to="#" is="behance" />
          <SocialLink to="#" is="twitter" />
          <SocialLink to="#" is="instagram" />
          <SocialLink to="#" is="facebook" />
          <SocialLink to="#" is="linkedin" />
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
