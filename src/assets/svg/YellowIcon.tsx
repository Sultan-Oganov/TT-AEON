import * as React from "react"
import { SVGProps } from "react"

const YellowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width={16}
  height={16}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <rect width={16} height={16} rx={4} fill="#FEFBF0" />
  <path
    d="M4.901 13.255a.4.4 0 0 1-.633-.325V4.933A1.733 1.733 0 0 1 6 3.2h4a1.733 1.733 0 0 1 1.732 1.733v7.998a.4.4 0 0 1-.633.325L8 11.025l-3.1 2.229h.001Z"
    fill="#F0C752"
  />
</svg>
)

export default YellowIcon
