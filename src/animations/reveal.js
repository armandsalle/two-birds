import { gsap } from "gsap/gsap-core"

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
      opacity: "100%",
      y: 0,
      ease: "Quad.easeOut",
      duration: 1,
    }
  )
}

export default reveal
