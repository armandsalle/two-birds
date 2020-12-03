import React, { useEffect, useRef, useCallback } from "react"
import CustomRichText from "../richText"
import Lottie from "lottie-react"

const ProcessItem = ({ title, desc, items, anim }) => {
  // const [animPlay, setAnimPlay] = useState(false)
  const lottieRef = useRef()

  useEffect(() => {
    lottieRef.current.pause()
  }, [])
  const hoverImg = useCallback((e, state) => {
    if (state === "in") {
      lottieRef.current.play()
    }
    if (state === "out") {
      lottieRef.current.stop()
    }
  }, [])

  return (
    <div
      className="process-item"
      onMouseEnter={e => hoverImg(e, "in")}
      onMouseLeave={e => hoverImg(e, "out")}
    >
      <div className="fake-img">
        <Lottie animationData={anim} lottieRef={lottieRef} />
      </div>
      <div className="process-item__content">
        <h3 className="h3">{title}</h3>
        <p className="mt-16">{desc}</p>
        <CustomRichText data={items} isText className="mt-24" />
      </div>
    </div>
  )
}

export default ProcessItem
