"use client";
import Logo from "@/shared/ui/Logo";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import UIButton from "@/shared/ui/UI-Button";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const linkStyles = "opacity-70 hover:opacity-100 transition-all ease-linear delay-75"

  return <header className={"flex w-full justify-between h-[120px] items-center"}>
    <Logo
    />
    <nav className={"text-white text-xl flex gap-[40px]"}>
      <Link className={linkStyles} href={"/about-us"}>
        About Us
      </Link>
      <Link className={linkStyles} href={"/features"}>
        Features
      </Link>
      <Link href={"/auth/login"} className={`${pathname.includes("auth") && "hidden"} ${linkStyles}`}>
        Log In
      </Link>
    </nav>
    <UIButton
      onClick={() => router.push("/auth/login")}
      className={"rounded-[25px] h-[70px] w-[210px] bg-primary_pink hover:bg-transparent hover:border-2 hover:border-primary_pink transition-all ease-linear delay-50 "}>
      <p className={"font-bold text-white text-2xl"}>
        Listen Now
      </p>
    </UIButton>
  </header>
}