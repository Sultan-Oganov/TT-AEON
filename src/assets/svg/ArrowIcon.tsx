import * as React from "react"
import { SVGProps } from "react"

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      d="M2.862 5.529a.667.667 0 0 1 .943 0L8 9.724l4.195-4.195a.667.667 0 1 1 .943.942l-4.667 4.667a.667.667 0 0 1-.942 0L2.862 6.471a.667.667 0 0 1 0-.942Z"
      fill="#6D6E85"
    />
  </svg>
)

export default ArrowIcon
