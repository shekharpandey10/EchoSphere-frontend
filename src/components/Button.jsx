import React from 'react'

function Button({
  label,
  varient = 'primary',
  size = 'medium',
  disable = false,
  icon: IconComponent,
  onClick,
}) {
  const style = `${
    varient === 'primary'
      ? 'bg-blue-500 text-white'
      : '' || varient === 'secondery'
      ? 'bg-gray-500 text-white font-xl '
      : '' || varient === 'tertiary'
      ? 'bg-green-500 text-white'
      : ''
  }`
  const sizeOfComp = `${
    size === 'small'
      ? 'h-12 w-[100px] '
      : '' || size === 'medium'
      ? 'h-16 w-[200px] '
      : '' || size === 'large'
      ? 'h-[60px] w-[300px]'
      : ''
  }`
  return <button className={`${style} ${sizeOfComp} cursor-pointer rounded-r-xl`}>{label}</button>
}

export default Button
