import React, { useState, createContext } from "react"

const defaultState = {
  exitAnimation: "opacity",
  enterAnimation: "opacity",
  setExitAnimation: () => {},
  setEnterAnimation: () => {},
  animationsCanRuns: false,
  setAnimationsCanRuns: () => {},
  projectAnimationCanRuns: true,
  setProjectAnimationCanRuns: () => {},
}
export const AnimationContext = createContext(defaultState)

export const AnimationProvider = ({ children }) => {
  const [exitAnimation, setExitAnimation] = useState("opacity")
  const [enterAnimation, setEnterAnimation] = useState("opacity")
  const [animationsCanRuns, setAnimationsCanRuns] = useState(false)
  const [projectAnimationCanRuns, setProjectAnimationCanRuns] = useState(true)

  return (
    <AnimationContext.Provider
      value={{
        exitAnimation,
        setExitAnimation,
        enterAnimation,
        setEnterAnimation,
        animationsCanRuns,
        setAnimationsCanRuns,
        projectAnimationCanRuns,
        setProjectAnimationCanRuns,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
