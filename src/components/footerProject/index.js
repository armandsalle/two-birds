import React, { useEffect, useRef } from "react"
import reveal from "../../animations/reveal"
import Button from "../button"
import SocialLink from "../scocialLink"

const FooterProject = ({
  dribbble,
  behance,
  twitter,
  instagram,
  facebook,
  linkedin,
}) => {
  const footerRef = useRef()

  useEffect(() => {
    reveal(footerRef.current, footerRef.current, false, "70%")
  }, [])

  return (
    <footer className="footer-project container" ref={footerRef}>
      <h2 className="h2 text-center">You have a project?</h2>
      <Button
        to="mailto:bonjour@twobirds.design?subject=On%20vole%20ensemble%20?"
        as="a"
        className="mt-40"
      >
        Contact us
      </Button>
      <p className="footer-project__info  text-center">Or get in touch on</p>
      <div className="footer-project__links">
        {dribbble && <SocialLink to={dribbble} is="dribble" />}
        {behance && <SocialLink to={behance} is="behance" />}
        {twitter && <SocialLink to={twitter} is="twitter" />}
        {instagram && <SocialLink to={instagram} is="instagram" />}
        {facebook && <SocialLink to={facebook} is="facebook" />}
        {linkedin && <SocialLink to={linkedin} is="linkedin" />}
      </div>
    </footer>
  )
}

export default FooterProject
