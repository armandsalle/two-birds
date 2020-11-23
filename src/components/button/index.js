import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import cn from "classnames"
import { gsap } from "gsap"

const Button = ({ children, to = "#", className }) => {
  const ctaRef = useRef(null)
  const cursor = useRef()

  const setCirclePosition = useRef(function (e) {
    if (e.type === "mouseenter") {
      gsap.to(cursor.current, {
        scale: 0,
        duration: 0.2,
      })
    }
    if (e.type === "mouseleave") {
      gsap.to(cursor.current, {
        scale: 0.2,
        duration: 0.2,
      })
    }

    const circle = ctaRef.current.querySelector(".cta__circle")
    const rect = this.getBoundingClientRect()
    const parentOffset = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    }
    const relX = e.pageX - parentOffset.left
    const relY = e.pageY - parentOffset.top

    circle.style.left = relX + "px"
    circle.style.top = relY + "px"
  })

  const setActive = useRef(() => {
    gsap.to(ctaRef.current, {
      keyframes: [
        { scale: 0.95, duration: 0.08 },
        { scale: 1, duration: 0.08 },
      ],
    })
  })

  useEffect(() => {
    const cta = ctaRef.current
    const fnsetCirclePosition = setCirclePosition.current
    const fnsetActive = setActive.current

    if (window !== "undefined") {
      cta.addEventListener("click", fnsetActive, false)

      if (window.matchMedia("screen and (min-width: 991px)").matches) {
        cursor.current = document.querySelector(".cursor")
        cta.addEventListener("mouseenter", fnsetCirclePosition, false)
        cta.addEventListener("mouseleave", fnsetCirclePosition, false)
      }
    }

    return () => {
      cta.removeEventListener("click", fnsetActive, false)
      if (
        window !== "undefined" &&
        window.matchMedia("screen and (min-width: 991px)").matches
      ) {
        cta.removeEventListener("mouseenter", fnsetCirclePosition, false)
        cta.removeEventListener("mouseleave", fnsetCirclePosition, false)
      }
    }
  }, [])

  return (
    <Link to={to} className={cn("cta", className)} ref={ctaRef}>
      <span className="cta__text">{children}</span>
      <div className="cta__circle"></div>
    </Link>
  )
}

export default Button
