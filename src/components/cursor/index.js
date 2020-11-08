import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import useIsTouchDesign from "../../hooks/useIsTouchDesign"

const Cursor = () => {
  const cursorRef = useRef()
  const cursorWrapperRef = useRef()

  const mouse = useRef()
  const prevMouse = useRef()

  const isToucheDevice = useIsTouchDesign()

  useEffect(() => {
    if (window !== "undefined") {
      const initState = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }
      mouse.current = initState
      prevMouse.current = initState
    }
  }, [])

  useEffect(() => {
    const getMousePos = ({ clientX, clientY }) => {
      mouse.current.x = clientX
      mouse.current.y = clientY
    }

    if (!isToucheDevice) {
      document.addEventListener("mousemove", getMousePos)

      const animate = () => {
        requestAnimationFrame(animate)
        const x = mouse.current.x
        const y = mouse.current.y

        prevMouse.current.x += (x - prevMouse.current.x) * 0.2
        prevMouse.current.y += (y - prevMouse.current.y) * 0.2

        gsap.set(cursorRef.current, {
          x: prevMouse.current.x,
          y: prevMouse.current.y,
        })
      }

      animate()
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
          Case
        </span>
      </div>
    </div>
  )
}

export default Cursor
