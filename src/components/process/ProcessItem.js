import React from "react"

const ProcessItem = ({ title, desc, items }) => {
  return (
    <div className="process-item">
      <div className="fake-img"></div>
      <div className="process-item__content">
        <h3 className="h3">{title}</h3>
        <p className="mt-16">{desc}</p>
        <ul className="mt-24">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProcessItem
