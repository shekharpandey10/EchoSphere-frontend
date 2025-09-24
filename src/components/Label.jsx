import React from 'react'

function Label({htmlFor,children,className=''}) {
  return (
   <label htmlFor={htmlFor}
   className={`block mb-1 font-medium w-[120px] text-center ${className} `}
   >
{children}
   </label>
  )
}

export default Label
