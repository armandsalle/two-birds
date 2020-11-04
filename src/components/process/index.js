import React from "react"
import ProcessItem from "./ProcessItem"

const Process = ({ title, processList }) => {
  console.log(processList)
  return (
    <section className="process container mt-240">
      <h2 className="h2">{title}</h2>
      <div className="process-list mt-80">
        {processList.map(({ processName, processText, processItems }, i) => (
          <ProcessItem
            key={i}
            title={processName}
            desc={processText}
            items={processItems}
          />
        ))}
      </div>
    </section>
  )
}

export default Process
