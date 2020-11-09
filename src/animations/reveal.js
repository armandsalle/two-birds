import { gsap } from "gsap"

const reveal = (
  target,
  trigger,
  hasOffset = false,
  offsetTrigger = "center"
) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: 80,
    },
    {
      scrollTrigger: {
        trigger: trigger,
        start: () => `${hasOffset ? "-=80" : "top"} ${offsetTrigger}`,
      },
      opacity: 1,
      y: 0,
      ease: "Quad.easeOut",
    }
  )
}

export default reveal
