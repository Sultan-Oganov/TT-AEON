import * as React from "react"
import { SVGProps } from "react"

const LightningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={16} height={16} rx={4} fill="#F5F1FE" />
    <path
      d="m6.023 9.067-.942 3.77c-.1.397.393.67.677.373l6.397-6.666a.4.4 0 0 0-.288-.677H9.488l.892-2.674a.4.4 0 0 0-.38-.526H6.267a.4.4 0 0 0-.385.29l-1.6 5.6a.4.4 0 0 0 .385.51h1.356Z"
      fill="#8754F6"
    />
  </svg>
)

export default LightningIcon
