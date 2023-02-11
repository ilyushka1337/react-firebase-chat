import React from 'react'

interface IButtonProps {
    As?: 'button' | 'a',
    href?: string,
    children: React.ReactNode,
    clickHandler?: () => void
}

const Button = ({ clickHandler, children, As ='a', href = '' }: IButtonProps) => {
  return (
    <As href={href} className="btn-primary" onClick={clickHandler}>{children}</As>
  )
}

export default Button