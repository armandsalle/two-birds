import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

const Cursor = () => {
  const cursorRef = useRef()
  const mouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })

  const prevMouse = useRef({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  })

  useEffect(() => {
    const getMousePos = ({ clientX, clientY }) => {
      mouse.current.x = clientX
      mouse.current.y = clientY
    }

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

    return () => {
      document.removeEventListener("mousemove", getMousePos)
    }
  }, [])
  return (
    <div className="cursor-wrapper">
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
