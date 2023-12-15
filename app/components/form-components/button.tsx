import * as React from "react"
import Loadingspinner from "../spinners/loadingspinner"
const variants = {
  'primary': 'primary',
  'default': 'default',
  'success': 'success',
  'outline': 'outline',
  'ghost': 'ghost',
  'danger': 'danger',
}

const sizes = {
  'sm': 'sm',
  'md': 'md',
  'lg': 'lg',
  'xl': 'xl',
  'full': 'full',
  'auto': 'auto'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants,
  size?: keyof typeof sizes,
  children?: React.ReactNode,
  className?: string
  processing?: boolean
}
/**
 * 
 * @param size - Describes the size of the button
 * @param variant - Describes one of the available variants
 * @param processing - Show a loading spinner to indicate a processing state 
 * @param {React.ReactNode} children  - Children of the button
 * @return
 */
const Button = ({ className, children, variant = "default", size = "auto", ...props }: ButtonProps): React.JSX.Element => {
  return <button disabled={props.disabled || props.processing} {...props} className={`button cursor-pointer text-center flex items-center gap-2 ${variants[variant]} ${sizes[size]} ${className}`}>
    {props.processing && <Loadingspinner className="!w-auto text-white !h-[3/4] !aspect-square" />}
    {children}
  </button>
}

export { Button }
