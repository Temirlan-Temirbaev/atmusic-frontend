import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";


export default function UIButton({className, children, ...props}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>){
  return <button className={`flex justify-center items-center ${className}`} {...props}>
    {children}
  </button>
}