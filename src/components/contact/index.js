import React from "react"
import Button from "../button"

const Contact = ({ title, cta }) => {
  return (
    <section className="contact container mt-240">
      <div className="contact__content">
        <h2 className="h2 text-center">{title}</h2>
        <Button to="#" className="mt-40">
          {cta}
        </Button>
      </div>
    </section>
  )
}

export default Contact
