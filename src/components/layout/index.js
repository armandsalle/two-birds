import React, { useContext, useEffect } from "react"
import { Transition, SwitchTransition } from "react-transition-group"
import { navigate } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import "../../styles/main.scss"
import { AnimationContext } from "../../contexts/animationContext"
import { animationStatut } from "../../contexts/animationState"
import Cursor from "../cursor"
import Loaded from "../loaded"
import ProjectNav from "../projectNav"
import useCreateLink from "../../hooks/useCreateLink"

gsap.registerPlugin(ScrollTrigger)

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return ""
  }

  const lang =
    navigator && navigator.language && navigator.language.split("-")[0]
  if (!lang) return ""

  switch (lang) {
    case "fr":
      return "fr"
    default:
      return ""
  }
}

const Layout = ({ children, location, pageContext }) => {
  const { animationsCanRuns, exitAnimation, enterAnimation } = useContext(
    AnimationContext
  )

  const createLink = useCreateLink(pageContext.lang)

  useEffect(() => {
    const urlLang = getRedirectLanguage()

    navigate(`/${urlLang}/`, { replace: true })
  }, [])

  const playExit = (node, path) => {
    if (animationsCanRuns && exitAnimation === "opacity") {
      if (animationStatut === "ORIGINAL") {
        gsap.to(".get-back", { opacity: 0 })
      }

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

  const playEnter = (node, path) => {
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
          timeout={{ exit: 500, enter: 0 }}
          onExit={node => playExit(node, location.pathname)}
          onEnter={node => playEnter(node, location.pathname)}
        >
          <main>{children}</main>
        </Transition>
      </SwitchTransition>
      <ProjectNav link={createLink} />
      <div
        className="project-patch"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="project-patch__img-wrapper">
          <img
            alt=""
            className="project-patch__logo"
            width="100"
            height="32"
            aria-hidden="true"
          />
        </div>
        <h1 className="h2 mt-16 project-patch__title" aria-hidden="true"></h1>
      </div>
    </Loaded>
  )
}

export default Layout
