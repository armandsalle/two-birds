import React, {
  useRef,
  useEffect,
  useCallback,
  useContext,
  useState,
} from "react"
import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Lottie from "lottie-react"
import Button from "../button"
import { AnimationContext } from "../../contexts/animationContext"
import axios from "axios"
// Lotties
import plants from "../../images/hero/plants.json"
import cockatoo from "../../images/hero/cockatoo.json"
import macaw from "../../images/hero/macaw.json"
import plantsLoop from "../../images/hero/plantsLoop.json"
import cockatooLoop from "../../images/hero/cockatooLoop.json"
import macawLoop from "../../images/hero/macawLoop.json"

const Hero = ({ title, text, cta, heroLotties }) => {
  console.log(heroLotties)
  const { animationsCanRuns } = useContext(AnimationContext)

  const animations = useRef([plants, cockatoo, macaw])
  const animationsLoop = useRef([plantsLoop, cockatooLoop, macawLoop])

  // const [lotties, setLotties] = useState([])

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

  // const getsomethig = async () => {
  //   const state = []

  //   await heroLotties.forEach(async el => {
  //     const res = await axios.get(el[0])
  //     const lottie = await res.data
  //     state.push(lottie)
  //   })

  //   setLotties(allLotties)
  // }

  // useEffect(() => {
  //   getsomethig()
  // }, [heroLotties])

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
    const title = heroRef.current.querySelector(".h1")
    const text = heroRef.current.querySelector(".hero__text")
    const button = heroRef.current.querySelector("a")
    const heroRight = heroRef.current.querySelector(".hero__right")

    const plantsCurrent = plantsRef.current
    const cockatooCurrent = cockatooRef.current
    const macawCurrent = macawRef.current
    const plantsLoopCurrent = plantsLoopRef.current
    const cockatooLoopCurrent = cockatooLoopRef.current
    const macawLoopCurrent = macawLoopRef.current
    let st

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

      plantsCurrent.play()
      cockatooCurrent.play()
      macawCurrent.play()

      st = ScrollTrigger.create({
        trigger: ".hero",
        start: "top-=80 top",
        end: "bottom",
        markers: true,
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
      if (animationsCanRuns) {
        st.kill()
        plantsCurrent.destroy()
        cockatooCurrent.destroy()
        macawCurrent.destroy()
        plantsLoopCurrent.destroy()
        cockatooLoopCurrent.destroy()
        macawLoopCurrent.destroy()
      }
    }
  }, [animationsCanRuns, playLotties, pauseLotties])

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
