"use client"
import {FEATURES_LIST} from "@/shared/constants";
import FeaturesCard from "@/widgets/home/unauthorized/Features-Card";

export default function Features() {
  return <div className={"flex flex-wrap flex-row justify-center w-full h-[75%] gap-[40px]"}>
    {FEATURES_LIST.map((feature) => {
      return <FeaturesCard {...feature} key={`feature-list-item-${Math.random()}`} />
    })}

  </div>
}