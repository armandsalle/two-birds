import { gsap } from "gsap"

const colors = {
  pink: "rgb(255, 90, 120)",
  black: "rgb(0, 0, 0)",
}

const mouseEnter = () => {
  gsap.to(".cursor", {
    scale: 1,
    backgroundColor: colors.pink,
    duration: 0.2,
  })
  gsap.to(".cursor__span", {
    opacity: 1,
    duration: 0.2,
  })
}

const mouseLeave = () => {
  gsap.to(".cursor", {
    scale: 0.2,
    backgroundColor: colors.black,
    duration: 0.2,
  })
  gsap.to(".cursor__span", {
    opacity: 0,
    duration: 0.2,
  })
}

const mouseClick = () => {
  gsap.to(".cursor", {
    keyframes: [
      { scale: 0.95, duration: 0.08 },
      { scale: 1, duration: 0.08 },
    ],
    onComplete: () => {
      setTimeout(() => {
        mouseLeave()
      }, 500)
    },
  })
}

export { mouseEnter, mouseLeave, mouseClick }
