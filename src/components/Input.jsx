import React from 'react'

function Input({type="text",placeholder="Enter text",value,onChange}) {
    const style='h-14 w-[250px] p-5 shadow-xl outline-none bg-white rounded'
  return (
   <input type={type}  placeholder={placeholder} value={value} onChange={onChange} className={`${style}`} />
  )
}

export default Input
