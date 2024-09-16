import {JSX, ReactNode} from "react";

export type FeaturesCard = {
  title: string;
  subtitle: string;
  content: string;
  Icon: () => JSX.Element;
}