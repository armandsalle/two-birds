import React, { forwardRef, useCallback, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"
import cn from "classnames"
import { gsap } from "gsap"
import { v4 as uuidv4 } from "uuid"
import useIsTouchDesign from "../../hooks/useIsTouchDesign"

const CustomRichText = forwardRef(({ data, className, isText, as }, ref) => {
  if (!data) return null

  const idRef = useRef(uuidv4())

  const isTouchDevice = useIsTouchDesign()

  const mouseEnterLink = useCallback(() => {
    if (!isTouchDevice) {
      gsap.to(".cursor", {
        scale: 0,
        duration: 0.2,
      })
    }
  }, [isTouchDevice])

  const mouseLeaveLink = useCallback(() => {
    if (!isTouchDevice) {
      gsap.to(".cursor", {
        scale: 0.2,
        duration: 0.2,
      })
    }
  }, [isTouchDevice])

  useEffect(() => {
    const links = [
      ...document.querySelectorAll(`.identifier-${idRef.current} a`),
    ]

    links.forEach(link => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [mouseEnterLink, mouseLeaveLink])

  let result

  switch (as) {
    case "h1":
      result = (
        <h1 className={className} ref={ref}>
          {RichText.render(data, linkResolver)}
        </h1>
      )
      break

    default:
      result = (
        <div
          className={cn(
            isText && "richtext",
            className,
            "identifier-" + idRef.current
          )}
          ref={ref}
        >
          {RichText.render(data, linkResolver)}
        </div>
      )
      break
  }

  return result
})

CustomRichText.defaultProps = {
  isText: false,
}

CustomRichText.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  as: PropTypes.string,
  isText: PropTypes.bool,
}

export default CustomRichText
