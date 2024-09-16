import { ReactNode} from "react";

export default function LandingLayout({children}: { children: ReactNode }) {
  return <div className={"min-h-screen min-w-full bg-primary_black"}>
    <div className={"flex flex-col w-full max-w-[1800px] px-[30px] mx-auto"}>
      {children}
    </div>
  </div>
}