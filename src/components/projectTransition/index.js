import React, { useEffect, useRef } from "react"
import Img from "gatsby-image"
import { navigate } from "gatsby"
import { gsap } from "gsap/gsap-core"
import { mouseEnter, mouseLeave, mouseClick } from "../../animations/cursor"
import { setAnimation } from "../../contexts/animationState"

const ProjectTransition = ({ nextProject }) => {
  const headerRect = useRef()

  useEffect(() => {
    headerRect.current = document
      .querySelector(".project-header")
      .getBoundingClientRect()

    const navigateToNextProject = () => {
      setAnimation("TRANSITION")
      document.querySelector("body").style.overflow = "hidden"

      const transitionContainerRect = document
        .querySelector(".project-transition .container")
        .getBoundingClientRect()

      const ydDiff = transitionContainerRect.y - headerRect.current.y
      console.log(ydDiff)

      const tl = gsap.timeline({
        paused: true,
        ease: "expo.out",
        onComplete: () => {
          navigate("/" + nextProject._meta.uid)
        },
      })
      tl.to(".project-header, .all-slices, footer", {
        opacity: 0,
        duration: 1,
      })
      tl.to(".line", { opacity: 0, duration: 0.1 }, 0)
      tl.to(
        ".project-transition__bg",
        {
          scaleY: 4,
          duration: 1,
        },
        0
      )
      tl.to(
        ".project-transition .container",
        {
          duration: 0.8,
          y: -ydDiff,
        },
        0
      )

      tl.play()
    }

    const pageTransitionTag = document.querySelector(".project-transition")
    pageTransitionTag.addEventListener("click", navigateToNextProject)

    return () => {
      pageTransitionTag.removeEventListener("click", navigateToNextProject)
    }
  }, [nextProject._meta.uid])

  return (
    <section
      className="project-transition"
      role="button"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={mouseClick}
    >
      <div className="project-transition__bg"></div>
      <div className="container" style={{ zIndex: 8, position: "relative" }}>
        {nextProject.projectLogoSharp.fluid ? (
          <Img
            fluid={nextProject.projectLogoSharp.fluid}
            alt={nextProject.projectLogo?.alt}
            className="project-transition__logo"
            fadeIn={false}
          />
        ) : (
          <img
            src={nextProject.projectLogo.url}
            alt={nextProject.projectLogo?.alt}
            className="project-transition__logo"
          />
        )}
        <h1 className="h2 mt-16">
          {nextProject.projectTitleRich.map((t, i) => (
            <span key={i}>{t.text}</span>
          ))}
        </h1>
      </div>
    </section>
  )
}

export default ProjectTransition