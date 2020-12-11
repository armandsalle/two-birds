import React, { useState, createContext } from "react"

const defaultState = {
  exitAnimation: "opacity",
  enterAnimation: "opacity",
  setExitAnimation: () => {},
  setEnterAnimation: () => {},
  animationsCanRuns: false,
  setAnimationsCanRuns: () => {},
}
export const AnimationContext = createContext(defaultState)

export const AnimationProvider = ({ children }) => {
  const [exitAnimation, setExitAnimation] = useState("opacity")
  const [enterAnimation, setEnterAnimation] = useState("opacity")
  const [animationsCanRuns, setAnimationsCanRuns] = useState(false)

  return (
    <AnimationContext.Provider
      value={{
        exitAnimation,
        setExitAnimation,
        enterAnimation,
        setEnterAnimation,
        animationsCanRuns,
        setAnimationsCanRuns,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
