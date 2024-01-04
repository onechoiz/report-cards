import React from 'react'

export const Input = ({inputPlaceholder, inputType = "text", onChange}) => {
  return (
    <input type={inputType}  placeholder={inputPlaceholder} onChange={onChange}/>
  )
}
