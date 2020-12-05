import React, { useState, createContext } from "react"

const defaultState = {
  exitAnimation: "opacity",
  enterAnimation: "opacity",
  setExitAnimation: () => {},
  setEnterAnimation: () => {},
  animationsCanRuns: false,
  setAnimationsCanRuns: () => {},
  isOnProjectPage: false,
  setIsOnProjectPage: () => {},
}
export const AnimationContext = createContext(defaultState)

export const AnimationProvider = ({ children }) => {
  const [exitAnimation, setExitAnimation] = useState("opacity")
  const [enterAnimation, setEnterAnimation] = useState("opacity")
  const [animationsCanRuns, setAnimationsCanRuns] = useState(false)
  const [isOnProjectPage, setIsOnProjectPage] = useState(false)

  return (
    <AnimationContext.Provider
      value={{
        exitAnimation,
        setExitAnimation,
        enterAnimation,
        setEnterAnimation,
        animationsCanRuns,
        setAnimationsCanRuns,
        isOnProjectPage,
        setIsOnProjectPage,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
