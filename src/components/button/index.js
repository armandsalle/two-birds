import { Link } from "gatsby"
import React, { useRef } from "react"
import cn from "classnames"
import { useEffect } from "react"
import { gsap } from "gsap"

const Button = ({ children, to = "#", className }) => {
  const ctaRef = useRef(null)
  const cursor = useRef()

  const setCirclePosition = useRef(function (e) {
    if (e.type === "mouseenter") {
      gsap.set(cursor.current, {
        zIndex: -1,
      })
    }
    if (e.type === "mouseleave") {
      gsap.set(cursor.current, {
        zIndex: 3,
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

  useEffect(() => {
    if (
      window !== "undefined" &&
      window.matchMedia("screen and (min-width: 991px)").matches
    ) {
      cursor.current = document.querySelector(".cursor-wrapper")
      ctaRef.current.addEventListener("mouseenter", setCirclePosition.current)
      ctaRef.current.addEventListener("mouseleave", setCirclePosition.current)
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
