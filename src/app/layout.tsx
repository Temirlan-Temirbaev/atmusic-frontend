import "./globals.css";
import {ReactQueryClientProvider} from "@/shared/providers";
import {AuthProvider} from "@/entities/user";
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <ReactQueryClientProvider>
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
      <ToastContainer />
    </ReactQueryClientProvider>
    </html>
  );
}
