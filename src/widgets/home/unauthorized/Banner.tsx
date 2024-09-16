"use client";
import UIButton from "@/shared/ui/UI-Button";
import {useRouter} from "next/navigation";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const router = useRouter();

  const containerRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLParagraphElement | null>(null)
  const subTitleRef = useRef<HTMLParagraphElement | null>(null)
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (titleRef.current && subTitleRef.current && buttonRef.current) {
      gsap.from([titleRef.current, subTitleRef.current, buttonRef.current], {
        opacity: 0,
        y: 50,
        duration: .600,
        ease: "power3.out",
        delay: 0.5,
        stagger: .100,
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "play pause resume reset",
          start: "top center",
          end: "bottom center"
        }
      });
    }
  }, {scope: containerRef})

  return <div className={"text-white flex items-center justify-center h-[90vh]"} ref={containerRef}>
    <div className="text-center flex flex-col items-center">
      <h1 ref={titleRef} className="text-7xl font-bold mb-4 flex">
        Listen to music with your
        <div className="text-white transform px-5 ml-5 py-2 -skew-x-20 bg-primary_pink">Love</div>
      </h1>
      <p ref={subTitleRef} className="mb-6 text-2xl font-normal opacity-70">With us, you can listen to anything, with
        anyone</p>
      <div ref={buttonRef}>
        <UIButton
          onClick={() => router.push("/auth/login")}
          className="bg-primary_pink hover:scale-105 hover:bg-transparent h-[70px] w-[240px] text-white font-bold rounded-[25px] text-2xl transition-all hover:border-2 hover:border-primary_pink delay-50 ease-linear">
          Listen Now
        </UIButton>
      </div>
    </div>
  </div>
}