import React from "react"
import ProcessItem from "./ProcessItem"

const Process = ({ process }) => {
  return (
    <section className="process container mt-240">
      <h2 className="h2">How we proceed</h2>
      <div className="process-list mt-80">
        {process.map(({ id, title, desc, items }) => (
          <ProcessItem key={id} title={title} desc={desc} items={items} />
        ))}
      </div>
    </section>
  )
}

export default Process
