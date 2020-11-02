import { Link } from "gatsby"
import React, { useRef } from "react"
import cn from "classnames"
import { useEffect } from "react"

const Button = ({ children, to = "#", className }) => {
  const ctaRef = useRef(null)

  const setCirclePosition = useRef(function (e) {
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
    if (window.matchMedia("screen and (min-width: 991px)").matches) {
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
