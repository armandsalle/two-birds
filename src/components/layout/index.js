import React, { useContext } from "react"
import "../../styles/main.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { Transition, SwitchTransition } from "react-transition-group"
import { AnimationContext } from "../../contexts/animationContext"
import Cursor from "../cursor"
import Loaded from "../loaded"

gsap.registerPlugin(ScrollTrigger)

const Layout = ({ children, location }) => {
  const { animationsCanRuns } = useContext(AnimationContext)

  const playExit = node => {
    if (animationsCanRuns) {
      gsap.to(node, {
        opacity: 0,
        duration: 0.4,
        // stagger: {
        //   amount: 0.1,
        // },
        onStart: () => {
          document.querySelector("body").style.pointerEvents = "none"
          console.log("transition start")
        },
        onComplete: () => {
          document.querySelector("body").style.pointerEvents = "all"
          // gsap.set("main", {
          //   opacity: 0,
          // })
          // gsap.set(".overlay-transition", {
          //   scaleX: 0,
          // })
        },
      })
    }
  }

  const playEnter = () => {
    if (animationsCanRuns) {
      gsap.fromTo(
        "main",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.4,
        }
      )
    }
  }

  return (
    <Loaded>
      <Cursor />
      <SwitchTransition mode="out-in">
        <Transition
          key={location.pathname}
          timeout={600}
          onExit={node => playExit(node)}
          onEnter={node => playEnter(node)}
        >
          <main>{children}</main>
        </Transition>
      </SwitchTransition>
      {/* <div className="overlay-transition overlay-transition--black"></div> */}
      {/* <div className="overlay-transition overlay-transition--white"></div> */}
    </Loaded>
  )
}

export default Layout
