import { atom } from "recoil"

const cursorScaleState = atom({
  key: "cursorScaleState",
  default: 0.16,
})

export default cursorScaleState
