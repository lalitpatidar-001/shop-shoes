import React from 'react'

const Button = ({title,myStyle}) => {
  return (
    <button className={` h-[43px] w-[142px]  font-[600] py-1 ${myStyle}`}>{title}</button>
  )
}

export default Button