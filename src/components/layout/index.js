import React, { useContext, useEffect } from "react"
import { Transition, SwitchTransition } from "react-transition-group"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import "../../styles/main.scss"
import { AnimationContext } from "../../contexts/animationContext"
import Cursor from "../cursor"
import Loaded from "../loaded"
import ProjectNav from "../projectNav"

gsap.registerPlugin(ScrollTrigger)

const Layout = ({ children, location }) => {
  const { animationsCanRuns, exitAnimation, enterAnimation } = useContext(
    AnimationContext
  )

  const playExit = node => {
    if (animationsCanRuns && exitAnimation === "opacity") {
      gsap.to(node, {
        opacity: 0,
        duration: 0.25,
        onStart: () => {
          document.querySelector("body").style.pointerEvents = "none"
        },
      })
    } else {
      document.querySelector("body").style.pointerEvents = "none"
    }
  }

  const playEnter = () => {
    if (animationsCanRuns && enterAnimation === "opacity") {
      gsap.fromTo(
        "main",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
          onStart: () => {
            document.querySelector("body").style.overflowY = "unset"
            document.querySelector("body").style.pointerEvents = "all"
          },
        }
      )
    } else {
      document.querySelector("body").style.pointerEvents = "all"
      document.querySelector("body").style.overflowY = "unset"
    }
  }

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [location.pathname])

  return (
    <Loaded>
      <Cursor />
      <SwitchTransition mode="out-in">
        <Transition
          key={location.pathname}
          timeout={500}
          onExit={node => playExit(node)}
          onEnter={node => playEnter(node)}
        >
          <main>{children}</main>
        </Transition>
      </SwitchTransition>
      <ProjectNav />
    </Loaded>
  )
}

export default Layout
