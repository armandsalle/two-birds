import React from "react"
import "../../styles/main.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const Layout = ({ children }) => {
  return <>{children}</>
}

export default Layout
