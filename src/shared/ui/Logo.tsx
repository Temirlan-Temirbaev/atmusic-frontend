"use client";
import {useRouter} from "next/navigation";
import {HTMLProps} from "react";
import {Mali} from "next/font/google"

const mali = Mali({subsets: ["latin"], weight: "600"})

export default function Logo({...props}: HTMLProps<HTMLHeadingElement>) {
  const router = useRouter();

  return <h1
    onClick={() => router.push("/")}
    className={`cursor-pointer text-5xl text-white font-bold ${props.className}`}
    {...props}
  >
    <span className={`${mali.className} text-primary_pink `}>A</span>
    <span className={`${mali.className} text-primary_blue`}>T</span>Music
  </h1>
}