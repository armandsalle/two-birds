import React from "react"
import CustomRichText from "../../richText"

const Description = ({ primary }) => {
  const { description } = primary
  return (
    <section className="container slice-description">
      <CustomRichText data={description} isText />
    </section>
  )
}

export default Description
