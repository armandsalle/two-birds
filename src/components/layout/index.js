import React from "react"
import "../../styles/main.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Cursor from "../cursor"
import { RecoilRoot } from "recoil"

gsap.registerPlugin(ScrollTrigger)
const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      <Cursor />
      {children}
    </RecoilRoot>
  )
}

export default Layout
