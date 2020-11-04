import { gsap } from "gsap"

const reveal = (target, trigger, hasOffset = false) => {
  return gsap.to(target, {
    scrollTrigger: {
      trigger: trigger,
      start: () => `${hasOffset ? "-=80" : "top"} center`,
    },
    opacity: 1,
    y: 0,
    ease: "Quad.easeOut",
  })
}

export default reveal
