import React from "react"
import Button from "../button"

const Contact = () => {
  return (
    <section className="contact container mt-240">
      <div className="contact__content">
        <h2 className="h2 text-center">Enough about us, what about you?</h2>
        <Button to="#" className="mt-40">
          Contact us
        </Button>
      </div>
    </section>
  )
}

export default Contact
