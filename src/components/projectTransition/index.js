import React, { useEffect, useRef, useContext } from "react"
import ReactDOMServer from "react-dom/server"
import Img from "gatsby-image"
import { navigate } from "gatsby"
import { gsap } from "gsap"
import { mouseEnter, mouseLeave, mouseClick } from "../../animations/cursor"
import { setAnimation } from "../../contexts/animationState"
import Button from "../button"
import { AnimationContext } from "../../contexts/animationContext"
import useCreateLink from "../../hooks/useCreateLink"

const ProjectTransition = ({ nextProject }) => {
  const { contactLottiesRef, setExitAnimation } = useContext(AnimationContext)
  const headerRect = useRef()

  const createLink = useCreateLink(
    nextProject._meta.lang,
    nextProject._meta.uid
  )

  useEffect(() => {
    headerRect.current = document
      .querySelector(".project-header")
      .getBoundingClientRect()

    const navigateToNextProject = () => {
      contactLottiesRef.forEach(e => {
        if (e) {
          e.pause()
        }
      })

      setAnimation("TRANSITION")
      document.querySelector("body").style.overflow = "hidden"

      const transitionContainerRect = document
        .querySelector(".project-transition .container")
        .getBoundingClientRect()

      const nextTextRect = document
        .querySelector(".project-transition__next")
        .getBoundingClientRect()

      const ydDiff =
        transitionContainerRect.y +
        (nextTextRect ? nextTextRect.height : 0) -
        headerRect.current.y

      const tl = gsap
        .timeline({
          paused: true,
          ease: "power3.out",
          onComplete: () => {
            const projectPatch = document.querySelector(".project-patch")
            const projectPatchImg = projectPatch.querySelector("img")
            const projectPatchTitle = projectPatch.querySelector("h1")

            projectPatchImg.src = nextProject.projectLogo.url
            projectPatchTitle.innerHTML = ReactDOMServer.renderToStaticMarkup(
              nextProject.projectTitleRich.map((t, i) => (
                <span key={i}>{t.text}</span>
              ))
            )
            gsap.set(projectPatch, {
              top: headerRect.current.top,
              left: headerRect.current.left,
              width: headerRect.current.width,
            })

            gsap.set(".project-patch", {
              display: "block",
              opacity: 1,
              onComplete: () => {
                setExitAnimation("project")

                navigate(createLink)
              },
            })
          },
        })
        .to(".project-header, .all-slices, footer", {
          opacity: 0,
          duration: 0.5,
        })
        .to(".line", { opacity: 0, duration: 0.1 }, 0)
        .to(
          ".project-transition__next, .project-transition__button",
          {
            duration: 0.35,
            opacity: 0,
          },
          0
        )
        .to(
          ".project-transition__bg",
          {
            scale: 4,
            duration: 0.5,
          },
          0
        )
        .to(
          ".project-transition .container",
          {
            duration: 0.5,
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
  }, [
    nextProject._meta.uid,
    contactLottiesRef,
    nextProject.projectLogo.url,
    nextProject.projectTitleRich,
    setExitAnimation,
    createLink,
  ])

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
        <div className="project-transition__next">Next project</div>
        <div className="toMove">
          <div className="project-transition__img-wrapper">
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
                width={100}
                height={32}
              />
            )}
          </div>
          <h1 className="h2 mt-16">
            {nextProject.projectTitleRich.map((t, i) => (
              <span key={i}>{t.text}</span>
            ))}
          </h1>
        </div>
        <Button
          to="#"
          className="project-transition__button"
          onClick={e => e.preventDefault()}
        >
          View case
        </Button>
      </div>
    </section>
  )
}

export default ProjectTransition
