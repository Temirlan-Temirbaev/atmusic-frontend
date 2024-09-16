// "use client";
import {FeaturesCard as FeaturesCardProps} from "@/shared/types";
import "./features-card.css";
import {useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
export default function FeaturesCard({title, subtitle, content, Icon}: FeaturesCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          toggleActions: "play pause resume reset",
          start: "top center",
          end: "bottom center",
        },
      });
    }
  }, {scope : cardRef});
  return (
    <div ref={cardRef} className="card example-2 hover:scale-110  duration-300 ease-linear transition-all bg-black90 ">
      <div className={"inner h-[99%] py-6 px-10 bg-black90"}>
        <div className="flex items-center gap-x-3 mb-10 relative z-10">
          <div className="min-w-16 min-h-16 rounded-[10px] bg-black80 flex items-center justify-center">
            {/* @ts-ignore */}
            <Icon className="w-8 h-8"/>
          </div>
          <h1 className="font-bold text-2xl text-white">{title}</h1>
        </div>
        <h2 className="font-semibold text-xl text-[#fefefe] mb-5">{subtitle}</h2>
        <p className="text-lg text-gray20 font-regular ">{content}</p>
      </div>
    </div>
  );
}
