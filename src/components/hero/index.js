import React, { useRef, useEffect, useCallback, useContext } from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Lottie from "lottie-react"
import Button from "../button"
import { AnimationContext } from "../../contexts/animationContext"
// Lotties
import plants from "../../images/hero/plants.json"
import cockatoo from "../../images/hero/cockatoo.json"
import macaw from "../../images/hero/macaw.json"
import plantsLoop from "../../images/hero/plantsLoop.json"
import cockatooLoop from "../../images/hero/cockatooLoop.json"
import macawLoop from "../../images/hero/macawLoop.json"

const Hero = ({ title, text, cta }) => {
  const { animationsCanRuns } = useContext(AnimationContext)

  const animations = useRef([plants, cockatoo, macaw])
  const animationsLoop = useRef([plantsLoop, cockatooLoop, macawLoop])

  const heroRef = useRef(null)
  // arrival Ref
  const plantsRef = useRef()
  const cockatooRef = useRef()
  const macawRef = useRef()
  // Loops ref
  const plantsLoopRef = useRef()
  const cockatooLoopRef = useRef()
  const macawLoopRef = useRef()

  const allrefs = {
    plants: {
      arrival: plantsRef.current,
      loop: plantsLoopRef.current,
    },
    cockatoo: {
      arrival: cockatooRef.current,
      loop: cockatooLoopRef.current,
    },
    macaw: {
      arrival: macawRef.current,
      loop: macawLoopRef.current,
    },
  }

  const removeArrivalLottie = useCallback(
    animName => {
      const getEl = (name, state) =>
        heroRef.current.querySelector(`.${name} .lottie-wrapper.${state}`)

      const elemArrival = getEl(animName, "arrival")
      const elemLoop = getEl(animName, "none")

      if (elemArrival) {
        allrefs[animName].arrival.stop()
        elemArrival.parentNode.removeChild(elemArrival)
      }

      if (elemLoop) {
        elemLoop.classList.remove("none")
        allrefs[animName].loop.play()
      }
    },
    [allrefs]
  )

  // const removeArrivalLottie = useCallback(animName => {
  //   const getEl = (name, state) =>
  //     heroRef.current.querySelector(`.${name} .lottie-wrapper.${state}`)

  //   if (animName === "plants") {
  //     plantsRef.current.stop()

  //     const plantsArrival = getEl("plants", "arrival")
  //     plantsArrival.parentNode.removeChild(plantsArrival)

  //     const plantsLoop = getEl("plants", "none")
  //     plantsLoop.classList.remove("none")

  //     plantsLoopRef.current.play()
  //   }

  //   if (animName === "cockatoo") {
  //     cockatooRef.current.stop()

  //     const cockatooArrival = getEl("cockatoo", "arrival")
  //     cockatooArrival.parentNode.removeChild(cockatooArrival)

  //     const cockatooLoop = getEl("cockatoo", "none")
  //     cockatooLoop.classList.remove("none")

  //     cockatooLoopRef.current.play()
  //   }

  //   if (animName === "macaw") {
  //     macawRef.current.stop()

  //     const macawArrival = getEl("macaw", "arrival")
  //     macawArrival.parentNode.removeChild(macawArrival)

  //     const macawLoop = getEl("macaw", "none")
  //     macawLoop.classList.remove("none")

  //     macawLoopRef.current.play()
  //   }
  // }, [])

  useEffect(() => {
    const title = heroRef.current.querySelector(".h1")
    const text = heroRef.current.querySelector(".hero__text")
    const button = heroRef.current.querySelector("a")
    const heroRight = heroRef.current.querySelector(".hero__right")

    if (animationsCanRuns) {
      heroRight.style.opacity = "100%"
      gsap.fromTo(
        ".cockatoo, .macaw",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.6,
          ease: "Quad.easeOut",
        }
      )
      gsap.fromTo(
        ".cockatoo, .macaw",
        {
          y: "-30%",
          x: "30%",
        },
        {
          y: "0",
          x: "0",
          ease: "Quad.easeOut",
          duration: 2,
        }
      )
      gsap.fromTo(
        ".plants",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "Quad.easeOut",
          duration: 1,
        }
      )

      plantsRef.current.play()
      cockatooRef.current.play()
      macawRef.current.play()

      ScrollTrigger.create({
        trigger: ".hero",
        start: "top",
        end: "bottom",
        once: false,
        onEnterBack: () => {
          plantsLoopRef.current.play()
          cockatooLoopRef.current.play()
          macawLoopRef.current.play()
        },
        onLeave: () => {
          plantsLoopRef.current.pause()
          cockatooLoopRef.current.pause()
          macawLoopRef.current.pause()
        },
      })

      gsap.fromTo(
        [title, text, button],
        {
          opacity: 0,
          y: 80,
        },
        {
          scrollTrigger: {
            trigger: heroRef.current,
            start: () => `top 70%`,
          },
          opacity: 1,
          y: 0,
          ease: "Quad.easeOut",
          duration: 1,
          stagger: {
            amount: 0.2,
          },
        }
      )
    }
  }, [animationsCanRuns])

  return (
    <section className="hero d-center-center" ref={heroRef}>
      <div className="container d-between-center">
        <div className="hero__left">
          <h1 className="h1">{title}</h1>
          <p className="hero__text">{text}</p>
          <Button
            to="mailto:bonjour@twobirds.design?subject=On%20vole%20ensemble%20?"
            as="a"
            className="mt-48 d-center-center"
          >
            {cta}
          </Button>
        </div>
        <div className="hero__right" style={{ opacity: 0 }}>
          <div className="plants">
            <Lottie
              animationData={animations.current[0]}
              autoplay={false}
              loop={false}
              lottieRef={plantsRef}
              onComplete={() => {
                removeArrivalLottie("plants")
              }}
              className="lottie-wrapper arrival"
            />
            <Lottie
              animationData={animationsLoop.current[0]}
              loop={true}
              autoplay={false}
              lottieRef={plantsLoopRef}
              className="lottie-wrapper none"
            />
          </div>

          <div className="cockatoo">
            <Lottie
              animationData={animations.current[1]}
              autoplay={false}
              loop={false}
              lottieRef={cockatooRef}
              onComplete={() => {
                removeArrivalLottie("cockatoo")
              }}
              className="lottie-wrapper arrival"
            />
            <Lottie
              animationData={animationsLoop.current[1]}
              loop={true}
              autoplay={false}
              lottieRef={cockatooLoopRef}
              className="lottie-wrapper none"
            />
          </div>

          <div className="macaw">
            <Lottie
              animationData={animations.current[2]}
              autoplay={false}
              loop={false}
              lottieRef={macawRef}
              onComplete={() => {
                removeArrivalLottie("macaw")
              }}
              className="lottie-wrapper arrival"
            />
            <Lottie
              animationData={animationsLoop.current[2]}
              loop={true}
              autoplay={false}
              lottieRef={macawLoopRef}
              className="lottie-wrapper none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
