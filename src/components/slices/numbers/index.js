import React from "react"

const Numbers = ({ fields }) => {
  return (
    <section className="slice-numbers container mt-240">
      {fields.map(({ numberTitle, numberText }, i) => (
        <div key={i} className="slice-numbers__number mb-32">
          <span className="slice-numbers__number__title h1">{numberTitle}</span>
          <span className="slice-numbers__number__text">{numberText}</span>
        </div>
      ))}
    </section>
  )
}

export default Numbers
