import React, { useEffect, useRef } from "react"
import { socialEnter, socialLeave } from "../../../animations/cursor"
import reveal from "../../../animations/reveal"
import CustomRichText from "../../richText"

const Description = ({ primary }) => {
  const descRef = useRef()
  const { description } = primary

  useEffect(() => {
    reveal(descRef.current, descRef.current, false, "70%")
  }, [])

  useEffect(() => {
    const links = [
      ...document.querySelectorAll(".slice-description .richtext a"),
    ]

    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        socialEnter()
      })

      link.addEventListener("mouseleave", () => {
        socialLeave()
      })
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener("mouseenter", () => {
          socialEnter()
        })

        link.removeEventListener("mouseleave", () => {
          socialLeave()
        })
      })
    }
  }, [])

  return (
    <section className="container slice-description" ref={descRef}>
      <CustomRichText data={description} isText />
    </section>
  )
}

export default Description
