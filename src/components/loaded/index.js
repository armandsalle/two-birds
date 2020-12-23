import React, { useEffect, useContext, useState, useCallback } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AnimationContext } from "../../contexts/animationContext"
import FontFaceObserver from "fontfaceobserver"
import imagesLoaded from "imagesloaded"
import axios from "axios"

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
          hero_lottie_plants_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          hero_lottie_macaw {
            ... on PRISMIC__FileLink {
              url
            }
          }
          hero_lottie_macaw_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          hero_lottie_cockatoo {
            ... on PRISMIC__FileLink {
              url
            }
          }
          hero_lottie_cockatoo_loop {
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
          contact_lottie_cloud_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_hill {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_hill_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_1 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_1_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_2 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_2_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_3 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_3_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_4 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_4_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_5 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_5_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_6 {
            ... on PRISMIC__FileLink {
              url
            }
          }
          contact_lottie_bird_6_loop {
            ... on PRISMIC__FileLink {
              url
            }
          }
        }
      }
    }
  `)

  const [loadedCanGo, setLoadedCanGo] = useState(false)
  const [loadedStart, setLoadedStart] = useState(false)
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

      setLoadedCanGo(true)

      // 300ms is the time to anim and remove the loading screen
      setTimeout(() => {
        setAnimationsCanRuns(true)
      }, 300)
    })
  }, [
    setAnimationsCanRuns,
    loadedStart,
    HeroURLs,
    setHeroLotties,
    setProcessLotties,
    ProcessURLs,
    TrustURLs,
    setTrustLotties,
    ContactURLs,
    setContactLotties,
    loadJSON,
  ])

  useEffect(() => {
    if (loadedCanGo) {
      console.log("load can go")
    }
  }, [loadedCanGo])

  useEffect(() => {
    setLoadedStart(performance.now())
  }, [])

  return <>{children}</>
}

export default Loaded
