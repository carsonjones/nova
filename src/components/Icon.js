import React from 'react'
import {colors, fontSizes} from '../styleGuide'

export const svgs = {
  heart: (
    <path
      d="M17.656 2q1.633 0 3.012 0.805t2.184 2.184 0.805 3.012q0 1.172-0.449 2.277t-1.309 1.965l-9.898 9.898-9.898-9.898q-0.859-0.859-1.309-1.965t-0.449-2.277q0-1.633 0.805-3.012t2.184-2.184 3.012-0.805q1.18 0 2.277 0.445t1.965 1.313l1.414 1.414 1.414-1.414q0.859-0.859 1.965-1.309t2.277-0.449zM17.656 4q-0.781 0-1.516 0.297t-1.312 0.875l-2.828 2.828-2.828-2.828q-0.578-0.578-1.313-0.875t-1.516-0.297q-1.094 0-2.012 0.535t-1.453 1.453-0.535 2.012q0 0.781 0.297 1.516t0.875 1.313l8.484 8.484 8.484-8.484q0.578-0.578 0.875-1.313t0.297-1.516q0-1.094-0.535-2.012t-1.453-1.453-2.012-0.535z">
    </path>
  )
}

const Icon = ({
  type,
  fill = colors.normal.black,
  size = fontSizes.medium,
  style = {}
}) => (
  <svg
    fill={fill}
    width={size}
    height={size}
    style={style}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {svgs[type]}
  </svg>
)

Icon.propTypes = {
  type: React.PropTypes.oneOf(Object.keys(svgs)).isRequired,
  fill: React.PropTypes.string,
  size: React.PropTypes.number,
  style: React.PropTypes.object,
}

export default Icon
