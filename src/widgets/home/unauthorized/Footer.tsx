import Logo from "@/shared/ui/Logo";
import Link from "next/link";
import TelegramIcon from "@/../public/icons/telegram_icon.svg"
import DiscordIcon from "@/../public/icons/discord_icon.svg"
import GithubIcon from "@/../public/icons/github_icon.svg"
export default function Footer() {
  return <footer className={"flex w-full justify-between h-[120px] items-center"}>
    <Logo />
    <nav className={"flex flex-row items-center gap-x-[40px]"}>
      <Link href={""} className={"w-16 h-16 flex items-center justify-center bg-black90 rounded-[10px] hover:bg-transparent hover:border-2 hover:border-primary_pink transition-all delay-75 ease-linear"}>
        <TelegramIcon className={"w-9 h-9"} />
      </Link>
      <Link href={""} className={"w-16 h-16 flex items-center justify-center bg-black90 rounded-[10px] hover:bg-transparent hover:border-2 hover:border-primary_pink transition-all delay-75 ease-linear"}>
        <DiscordIcon className={"w-9 h-9"} />
      </Link>
      <Link href={""} className={"w-16 h-16 flex items-center justify-center bg-black90 rounded-[10px] hover:bg-transparent hover:border-2 hover:border-primary_pink transition-all delay-75 ease-linear"}>
        <GithubIcon className={"w-9 h-9"} />
      </Link>
    </nav>
  </footer>
}