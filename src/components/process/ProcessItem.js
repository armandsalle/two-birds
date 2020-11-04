import React from "react"
import CustomRichText from "../richText"

const ProcessItem = ({ title, desc, items }) => {
  return (
    <div className="process-item ty-80 opacity-0">
      <div className="fake-img"></div>
      <div className="process-item__content">
        <h3 className="h3">{title}</h3>
        <p className="mt-16">{desc}</p>
        <CustomRichText data={items} isText className="mt-24" />
      </div>
    </div>
  )
}

export default ProcessItem
