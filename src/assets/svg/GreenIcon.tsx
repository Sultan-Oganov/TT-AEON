import * as React from "react"
import { SVGProps } from "react"

const GreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={16} height={16} rx={4} fill="#EEF9F4" />
    <path
      d="m9.887 11.733-.155.671a1.2 1.2 0 0 1-1.077.926l-.092.003H7.437a1.2 1.2 0 0 1-1.145-.84l-.025-.09-.155-.67h3.775ZM8 2.667a3.867 3.867 0 0 1 3.867 3.867c0 1.14-.5 2.183-1.475 3.115a.133.133 0 0 0-.038.066l-.281 1.218H8.4v-3.6a.4.4 0 0 0-.8 0v3.6H5.927l-.28-1.217a.133.133 0 0 0-.038-.066c-.976-.933-1.476-1.977-1.476-3.117A3.867 3.867 0 0 1 8 2.667Zm-.4 2.534V6a.4.4 0 1 0 .8 0v-.8a.4.4 0 0 0-.8 0Zm2.683.78a.4.4 0 0 0-.566 0l-.566.566a.4.4 0 1 0 .566.566l.566-.565a.4.4 0 0 0 0-.566Zm-4 0a.4.4 0 0 0-.566.566l.566.566a.4.4 0 1 0 .565-.565l-.565-.566Z"
      fill="#2DB77B"
    />
  </svg>
)

export default GreenIcon
