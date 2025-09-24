import React from 'react'

function Button({
  label,
  variant,
  size = 'medium',
  disable = false,
  icon: IconComponent,
  onClick,
}) {
  const style =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : variant === 'secondary'
      ? 'bg-[#273F4F] text-white hover:bg-[#E45A92]'
      : variant === 'tertiary'
      ? 'bg-green-500 text-white hover:bg-green-600'
      : 'bg-gray-300 text-black' // fallback

  // Size styles
  const sizeOfComp =
    size === 'small'
      ? 'h-10 w-[100px] text-sm'
      : size === 'medium'
      ? 'h-12 w-[200px] text-base'
      : size === 'large'
      ? 'h-14 w-[300px] text-lg'
      : 'h-12 w-[200px] text-base' // fallback
  return (
    <button className={`${style} ${sizeOfComp} cursor-pointer rounded-xl `}>
      {label}
    </button>
  )
}

export default Button
