"use apiClient";
import Header from "@/widgets/home/unauthorized/Header";
import Banner from "@/widgets/home/unauthorized/Banner";
import Features from "@/widgets/home/unauthorized/Features";
import Footer from "@/widgets/home/unauthorized/Footer";
import AnimatedCursor from "react-animated-cursor";

export default function Landing() {


  return <>
    <Header/>
    <Banner/>
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
    <Features/>
    <Footer/>
  </>
}