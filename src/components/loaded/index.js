import React, { useEffect, useContext, useState } from "react"
import { AnimationContext } from "../../contexts/animationContext"
import FontFaceObserver from "fontfaceobserver"
import imagesLoaded from "imagesloaded"

const Loaded = ({ children }) => {
  const [loadedCanGo, setLoadedCanGo] = useState(false)
  const [loadedStart, setLoadedStart] = useState(false)
  const { setAnimationsCanRuns } = useContext(AnimationContext)

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
    ]).then(() => {
      const diff = performance.now() - loadedStart > 300 ? 0 : 300

      setTimeout(() => {
        setLoadedCanGo(true)
      }, 300 + diff)

      setTimeout(() => {
        setAnimationsCanRuns(true)
      }, 1800 + diff)
    })
  }, [setAnimationsCanRuns, loadedStart])

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
