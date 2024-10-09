import Image from "next/legacy/image"
import { ArrowDown } from "@/components/svg.js"

const Icon = props => {
  let downloadArrow = false
  let noLink = false
  let noAnchor = false

  if (props.download === true) {
    downloadArrow = true
  }

  if (props.link === undefined) {
    noLink = true
  }

  if (props.anchor === undefined) {
    noAnchor = true
  }

  return (
    <div className="flex flex-col items-stretch max-w-full overflow-hidden">
      <a
          href={props.link}
          
        >
        <Image
          className="object-scale-down max-h-full drop-shadow-md rounded-md m-auto"
          alt=""
          quality="100"
          placeholder="blur"
          width="612"
          height="344"
          src={props.src}
          id={props.anchor}
        /></a>
      <div className="mb-3"></div>
    </div>
  )
}

export default Icon
