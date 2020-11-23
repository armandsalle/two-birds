import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import useIsTouchDesign from "../../hooks/useIsTouchDesign"

const Cursor = () => {
  const cursorRef = useRef()
  const cursorWrapperRef = useRef()

  const isToucheDevice = useIsTouchDesign()

  useEffect(() => {
    // hide curosr
    gsap.set(cursorRef.current, { opacity: 0, scale: 0 })

    let mouse,
      prevMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const getMousePos = ({ clientX, clientY }) => {
      mouse.x = clientX
      mouse.y = clientY
    }

    const animate = () => {
      requestAnimationFrame(animate)

      prevMouse.x += (mouse.x - prevMouse.x) * 0.2
      prevMouse.y += (mouse.y - prevMouse.y) * 0.2

      gsap.set(cursorRef.current, {
        x: prevMouse.x,
        y: prevMouse.y,
      })
    }

    if (window !== "undefined" && !isToucheDevice) {
      const initState = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }

      mouse = { ...initState }
      prevMouse = { ...initState }

      // start the animation after 500ms and show the cursor
      setTimeout(() => {
        document.addEventListener("mousemove", getMousePos)
        gsap.to(cursorRef.current, {
          opacity: 1,
          scale: 0.16,
          duration: 0.25,
        })
        animate()
      }, 500)
    } else {
      cursorWrapperRef.current.style.display = "none"
    }

    return () => {
      if (!isToucheDevice) {
        document.removeEventListener("mousemove", getMousePos)
      }
    }
  }, [isToucheDevice])

  return (
    <div className="cursor-wrapper" ref={cursorWrapperRef}>
      <div className="cursor" ref={cursorRef}>
        <span className="cursor__span">
          View
          <br />
          case
        </span>
      </div>
    </div>
  )
}

export default Cursor
