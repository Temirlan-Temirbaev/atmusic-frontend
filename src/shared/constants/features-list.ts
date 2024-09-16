import {FeaturesCard} from "@/shared/types";
//@ts-ignore
import UserIcon from "@/../public/icons/user_icon.svg";
//@ts-ignore
import AIIcon from "@/../public/icons/ai_icon.svg"
//@ts-ignore
import MicrophoneIcon from "@/../public/icons/microphone_icon.svg"

export const FEATURES_LIST: FeaturesCard[] = [
  {
    title: "Connect with Friends for Shared Listening",
    subtitle: "Enjoy Your Favorite Files Together.",
    content: "Upload any audio files and listen to them with friends in real time. No matter where you are, you can always stay in tune with your loved ones, diving into the world of sounds together.",
    Icon : UserIcon
  },
  {
    title: "Boundless Communication",
    subtitle: "Stay Connected While Listening.",
    content: "Chat with friends through convenient text and voice chats without interrupting your listening experience. Share your thoughts, discuss favorite moments, and stay connected while immersing yourselves in music or audiobooks together.",
    Icon : MicrophoneIcon
  },
  {
    title: "Recommendations for duo",
    subtitle: "Find the Perfect Tracks for Your Duo.",
    content: "In the future, our platform will offer unique recommendations for each room. The algorithm will select music tailored specifically for you and your friend, creating a personalized audio stream that you'll both love.",
    Icon : AIIcon
  },

]