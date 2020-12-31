import React, { useEffect, useContext, useState, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnimationContext } from "../../contexts/animationContext"
import FontFaceObserver from "fontfaceobserver"
import imagesLoaded from "imagesloaded"
import axios from "axios"
import { gsap } from "gsap"
import Background from "./Background"
import Logo from "./Logo"
import Foreground from "./Foreground"

const Loaded = ({ children }) => {
  const {
    prismic: { HeroURLs, ProcessURLs, TrustURLs, ContactURLs },
  } = useStaticQuery(graphql`
    query LottiesURLs {
      prismic {
        HeroURLs: home(lang: "fr-fr", uid: "home") {
          hero_lottie_plants {
            ... on PRISMIC__FileLink {
              url
            }
          }
          hero_lottie_macaw {
            ... on PRISMIC__FileLink {
              url
            }
          }
          hero_lottie_cockatoo {
            ... on PRISMIC__FileLink {
              url
            }
          }
        }
        ProcessURLs: home(lang: "fr-fr", uid: "home") {
          process_lottie_hummingbird {
            ... on PRISMIC__FileLink {
              url
            }
          }
          process_lottie_toucan {
            ... on PRISMIC__FileLink {
              url
            }
          }
          process_lottie_owl {
            ... on PRISMIC__FileLink {
              url
            }
          }
        }
        TrustURLs: home(lang: "fr-fr", uid: "home") {
          trust_lottie_vincent {
            ... on PRISMIC__FileLink {
              url
            }
          }
          trust_lottie_clement {
            ... on PRISMIC__FileLink {
              url
            }
          }
        }
        ContactURLs: home(lang: "fr-fr", uid: "home") {
          contact_lottie_cloud {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_1 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_2 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_3 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_4 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_5 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_6 {
            ... on PRISMIC__FileLink {
              url
            }
          }
        }
      }
    }
  `)

  const [loadedCanGo, setLoadedCanGo] = useState(false)

  const {
    setAnimationsCanRuns,
    setHeroLotties,
    setProcessLotties,
    setTrustLotties,
    setContactLotties,
  } = useContext(AnimationContext)

  const loadJSON = useCallback(async urls => {
    let lotties = await Promise.all(
      Object.entries(urls).map(async el => {
        let lottie

        try {
          const res = await axios.get(el[1].url)
          lottie = await res.data
        } catch (error) {
          console.log(error)
        }

        return { [el[0]]: lottie }
      })
    )

    return lotties
  }, [])

  useEffect(() => {
    const startTime = performance.now()

    const font = new FontFaceObserver("Poppins")
    const imgLoaded = imagesLoaded(
      document.querySelector("body"),
      { background: true },
      null
    )

    Promise.all([
      window.loadPromise,
      font.load(null, 100000),
      imgLoaded.on("done"),
      loadJSON(HeroURLs),
      loadJSON(ProcessURLs),
      loadJSON(TrustURLs),
      loadJSON(ContactURLs),
    ]).then(d => {
      setHeroLotties(d[3])
      setProcessLotties(d[4])
      setTrustLotties(d[5])
      setContactLotties(d[6])

      const endTime = performance.now()
      let t = 0

      if (endTime - startTime <= 3000) {
        t = endTime - startTime
      }

      setTimeout(() => {
        setLoadedCanGo(true)
      }, 3000 - t)

      // 300ms is the time to anim and remove the loading screen
      setTimeout(() => {
        setAnimationsCanRuns(true)
      }, 3000 - t + 300)
    })
  }, [])

  useEffect(() => {
    if (loadedCanGo) {
      gsap.to(".loading", {
        opacity: 0,
        display: "none",
        // delay: 0.1,
        duration: 0.2,
        onStart: () => {
          gsap.killTweensOf(".loading__background")
          gsap.killTweensOf(".loading__foreground")
        },
      })
    }
  }, [loadedCanGo])

  useEffect(() => {
    gsap.to(".loading__background", {
      duration: 75,
      xPercent: 20,
      ease: "none",
    })
    gsap.to(".loading__foreground", {
      duration: 30,
      xPercent: 20,
      ease: "none",
    })
  }, [])

  return (
    <>
      <div className="loading">
        <div className="loading__background">
          <Background />
        </div>
        <div className="loading__logo">
          <Logo />
        </div>
        <div className="loading__foreground">
          <Foreground />
        </div>
      </div>
      {children}
    </>
  )
}

export default Loaded
