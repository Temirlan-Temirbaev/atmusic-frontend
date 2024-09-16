import {ReactNode} from "react";
import AnimatedCursor from "react-animated-cursor";
import Header from "@/widgets/home/unauthorized/Header";

export default function AuthLayout({children}: { children: ReactNode }) {
  return <div className={"min-h-screen min-w-full bg-primary_black"}>
    <div className={"flex flex-col w-full max-w-[1800px] px-[30px] mx-auto"}>
      <Header />
      <div className={"flex items-center w-full justify-center"} style={{height: "calc(100vh - 120px)"}}>
        {children}
      </div>
    </div>
    <AnimatedCursor
      color={"255,255,255"}
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.3}
      outerAlpha={1}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: 'var(--cursor-color)',
        mixBlendMode: 'exclusion'
      }}
    />
  </div>
}