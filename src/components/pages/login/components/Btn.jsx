import React from 'react'

export const Btn = ({onBtnClick, btnText}) => {
  return (
    <button onClick={onBtnClick}>{btnText}</button>
  )
}
