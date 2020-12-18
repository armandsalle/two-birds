import React, {
  useRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Content from "./Content"
import Lottie from "lottie-react"
import { AnimationContext } from "../../contexts/animationContext"

const Contact = ({ title, cta }) => {
  const { animationsCanRuns, contactLotties } = useContext(AnimationContext)

  const [lotties, setLotties] = useState(null)

  const sectionRef = useRef()

  // Arrivals ref
  const cloudRef = useRef()
  const hillRef = useRef()
  const bird1Ref = useRef()
  const bird2Ref = useRef()
  const bird3Ref = useRef()
  const bird4Ref = useRef()
  const bird5Ref = useRef()
  const bird6Ref = useRef()
  // Loops ref
  const cloudLoopRef = useRef()
  const hillLoopRef = useRef()
  const bird1LoopRef = useRef()
  const bird2LoopRef = useRef()
  const bird3LoopRef = useRef()
  const bird4LoopRef = useRef()
  const bird5LoopRef = useRef()
  const bird6LoopRef = useRef()

  const [allrefs, setRefs] = useState()

  const removeArrivalLottie = useCallback(
    animName => {
      const getEl = (name, state) =>
        sectionRef.current.querySelector(`.${name} .lottie-wrapper.${state}`)

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
    const loops = sectionRef.current.querySelectorAll(`.lottie-wrapper.none`)

    if (loops.length === 8) {
      cloudRef.current.play()
      hillRef.current.play()
      bird1Ref.current.play()
      bird2Ref.current.play()
      bird3Ref.current.play()
      bird4Ref.current.play()
      bird5Ref.current.play()
      bird6Ref.current.play()
    }

    if (loops.length === 0) {
      cloudLoopRef.current.play()
      hillLoopRef.current.play()
      bird1LoopRef.current.play()
      bird2LoopRef.current.play()
      bird3LoopRef.current.play()
      bird4LoopRef.current.play()
      bird5LoopRef.current.play()
      bird6LoopRef.current.play()
    }
  }, [])

  const pauseLotties = useCallback(() => {
    const loops = sectionRef.current.querySelectorAll(`.lottie-wrapper.none`)

    if (loops.length === 8) {
      cloudRef.current.pause()
      hillRef.current.pause()
      bird1Ref.current.pause()
      bird2Ref.current.pause()
      bird3Ref.current.pause()
      bird4Ref.current.pause()
      bird5Ref.current.pause()
      bird6Ref.current.pause()
    }

    if (loops.length === 0) {
      cloudLoopRef.current.pause()
      hillLoopRef.current.pause()
      bird1LoopRef.current.pause()
      bird2LoopRef.current.pause()
      bird3LoopRef.current.pause()
      bird4LoopRef.current.pause()
      bird5LoopRef.current.pause()
    }
  }, [])

  useEffect(() => {
    if (animationsCanRuns) {
      const lotties = contactLotties.reduce((prev, el) => {
        return {
          ...prev,
          [Object.keys(el)[0]]: el[Object.keys(el)[0]],
        }
      }, {})
      setLotties(lotties)
    }
  }, [animationsCanRuns, contactLotties, setLotties])

  useEffect(() => {
    let st

    if (lotties) {
      setRefs({
        cloud: {
          arrival: cloudRef.current,
          loop: cloudLoopRef.current,
        },
        hill: {
          arrival: hillRef.current,
          loop: hillLoopRef.current,
        },
        bird1: {
          arrival: bird1Ref.current,
          loop: bird1LoopRef.current,
        },
        bird2: {
          arrival: bird2Ref.current,
          loop: bird2LoopRef.current,
        },
        bird3: {
          arrival: bird3Ref.current,
          loop: bird3LoopRef.current,
        },
        bird4: {
          arrival: bird4Ref.current,
          loop: bird4LoopRef.current,
        },
        bird5: {
          arrival: bird5Ref.current,
          loop: bird5LoopRef.current,
        },
        bird6: {
          arrival: bird6Ref.current,
          loop: bird6LoopRef.current,
        },
      })

      st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "-80px bottom",
        end: "bottom-=80 top",
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
    }

    return () => {
      if (lotties) {
        st.kill()
      }
    }
  }, [lotties, playLotties, pauseLotties, setRefs])

  return (
    <section className="contact container mt-240" ref={sectionRef}>
      {lotties && (
        <>
          <div className="contact__loties">
            <div className="cloud">
              <Lottie
                animationData={lotties.contact_lottie_cloud_loop}
                autoplay={false}
                loop={false}
                lottieRef={cloudRef}
                onComplete={() => {
                  removeArrivalLottie("cloud")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_cloud_loop}
                loop={true}
                autoplay={false}
                lottieRef={cloudLoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="hill">
              <Lottie
                animationData={lotties.contact_lottie_hill}
                autoplay={false}
                loop={false}
                lottieRef={hillRef}
                onComplete={() => {
                  removeArrivalLottie("hill")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_hill_loop}
                loop={true}
                autoplay={false}
                lottieRef={hillLoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="bird1">
              <Lottie
                animationData={lotties.contact_lottie_bird_1}
                autoplay={false}
                loop={false}
                lottieRef={bird1Ref}
                onComplete={() => {
                  removeArrivalLottie("bird1")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_bird_1_loop}
                loop={true}
                autoplay={false}
                lottieRef={bird1LoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="bird2">
              <Lottie
                animationData={lotties.contact_lottie_bird_2}
                autoplay={false}
                loop={false}
                lottieRef={bird2Ref}
                onComplete={() => {
                  removeArrivalLottie("bird2")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_bird_2_loop}
                loop={true}
                autoplay={false}
                lottieRef={bird2LoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="bird3">
              <Lottie
                animationData={lotties.contact_lottie_bird_3}
                autoplay={false}
                loop={false}
                lottieRef={bird3Ref}
                onComplete={() => {
                  removeArrivalLottie("bird3")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_bird_3_loop}
                loop={true}
                autoplay={false}
                lottieRef={bird3LoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="bird4">
              <Lottie
                animationData={lotties.contact_lottie_bird_4}
                autoplay={false}
                loop={false}
                lottieRef={bird4Ref}
                onComplete={() => {
                  removeArrivalLottie("bird4")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_bird_4_loop}
                loop={true}
                autoplay={false}
                lottieRef={bird4LoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="bird5">
              <Lottie
                animationData={lotties.contact_lottie_bird_5}
                autoplay={false}
                loop={false}
                lottieRef={bird5Ref}
                onComplete={() => {
                  removeArrivalLottie("bird5")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_bird_5_loop}
                loop={true}
                autoplay={false}
                lottieRef={bird5LoopRef}
                className="lottie-wrapper none"
              />
            </div>

            <div className="bird6">
              <Lottie
                animationData={lotties.contact_lottie_bird_6}
                autoplay={false}
                loop={false}
                lottieRef={bird6Ref}
                onComplete={() => {
                  removeArrivalLottie("bird6")
                }}
                className="lottie-wrapper arrival"
              />
              <Lottie
                animationData={lotties.contact_lottie_bird_6_loop}
                loop={true}
                autoplay={false}
                lottieRef={bird6LoopRef}
                className="lottie-wrapper none"
              />
            </div>
          </div>

          <Content sectionRef={sectionRef} title={title} cta={cta} />
        </>
      )}
    </section>
  )
}

export default Contact
