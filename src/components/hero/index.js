import React, {
  useRef,
  useEffect,
  useCallback,
  useContext,
  useState,
} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Lottie from "lottie-react"
import Button from "../button"
import { AnimationContext } from "../../contexts/animationContext"

const Hero = ({ title, text, cta }) => {
  const { animationsCanRuns, heroLotties } = useContext(AnimationContext)

  const [lotties, setLotties] = useState(null)

  const heroRef = useRef(null)
  // arrival Ref
  const plantsRef = useRef()
  const cockatooRef = useRef()
  const macawRef = useRef()
  // Loops ref
  const plantsLoopRef = useRef()
  const cockatooLoopRef = useRef()
  const macawLoopRef = useRef()

  const removeArrivalLottie = useCallback(animName => {
    const getEl = (name, state) =>
      heroRef.current.querySelector(`.${name} .lottie-wrapper.${state}`)

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
  }, [])

  const playLotties = useCallback(() => {
    const loops = heroRef.current.querySelectorAll(`.lottie-wrapper.none`)

    if (loops.length === 8) {
      plantsRef.current.play()
      cockatooRef.current.play()
      macawRef.current.play()
    }

    if (loops.length === 0) {
      plantsLoopRef.current.play()
      cockatooLoopRef.current.play()
      macawLoopRef.current.play()
    }
  }, [])

  const pauseLotties = useCallback(() => {
    const loops = heroRef.current.querySelectorAll(`.lottie-wrapper.none`)

    if (loops.length === 8) {
      plantsRef.current.pause()
      cockatooRef.current.pause()
      macawRef.current.pause()
    }

    if (loops.length === 0) {
      plantsLoopRef.current.pause()
      cockatooLoopRef.current.pause()
      macawLoopRef.current.pause()
    }
  }, [])

  useEffect(() => {
    if (animationsCanRuns) {
      const lotties = heroLotties.reduce((prev, el) => {
        return {
          ...prev,
          [Object.keys(el)[0]]: el[Object.keys(el)[0]],
        }
      }, {})
      setLotties(lotties)
    }
  }, [animationsCanRuns, heroLotties, setLotties])

  useEffect(() => {
    const title = heroRef.current.querySelector(".h1")
    const text = heroRef.current.querySelector(".hero__text")
    const button = heroRef.current.querySelector("a")
    const heroRight = heroRef.current.querySelector(".hero__right")

    const plantsCurrent = plantsRef.current
    const cockatooCurrent = cockatooRef.current
    const macawCurrent = macawRef.current

    let st

    if (lotties) {
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

      plantsCurrent.play()
      cockatooCurrent.play()
      macawCurrent.play()

      st = ScrollTrigger.create({
        trigger: ".hero",
        start: "top-=80 top",
        end: "bottom",
        once: false,
        onEnter: () => {
          playLotties()
        },
        onEnterBack: () => {
          playLotties()
        },
        onLeave: () => {
          pauseLotties()
        },
        onLeaveBack: () => {
          pauseLotties()
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

    return () => {
      if (lotties) {
        st.kill()
      }
    }
  }, [playLotties, pauseLotties, lotties])

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
        {lotties && (
          <div className="hero__right" style={{ opacity: 0 }}>
            <div className="plants">
              <Lottie
                animationData={lotties.hero_lottie_plants}
                autoplay={false}
                loop={false}
                lottieRef={plantsRef}
                onComplete={() => {
                  removeArrivalLottie("plants")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.hero_lottie_plants_loop}
                loop={true}
                autoplay={false}
                lottieRef={plantsLoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="cockatoo">
              <Lottie
                animationData={lotties.hero_lottie_cockatoo}
                autoplay={false}
                loop={false}
                lottieRef={cockatooRef}
                onComplete={() => {
                  removeArrivalLottie("cockatoo")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.hero_lottie_cockatoo_loop}
                loop={true}
                autoplay={false}
                lottieRef={cockatooLoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="macaw">
              <Lottie
                animationData={lotties.hero_lottie_macaw}
                autoplay={false}
                loop={false}
                lottieRef={macawRef}
                onComplete={() => {
                  removeArrivalLottie("macaw")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.hero_lottie_macaw_loop}
                loop={true}
                autoplay={false}
                lottieRef={macawLoopRef}
                className="lottie-wrapper none"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
