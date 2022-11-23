import * as React from "react"
import { SVGProps } from "react"

const RedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width={16}
  height={16}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <rect width={16} height={16} rx={4} fill="#FAEFF2" />
  <path
    d="M7.999 9.067a1.067 1.067 0 1 0 0-2.134 1.067 1.067 0 0 0 0 2.134Z"
    fill="#BE385E"
  />
  <path
    d="M4.799 8a3.2 3.2 0 1 1 6.4 0 3.2 3.2 0 0 1-6.4 0Zm3.2-2.4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z"
    fill="#BE385E"
  />
  <path
    d="M2.664 8a5.334 5.334 0 1 1 10.67 0 5.334 5.334 0 0 1-10.67 0ZM8 3.466a4.534 4.534 0 1 0 0 9.068 4.534 4.534 0 0 0 0-9.068Z"
    fill="#BE385E"
  />
</svg>
)

export default RedIcon
