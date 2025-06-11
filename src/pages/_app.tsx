import type { AppProps } from 'next/app'
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";


const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
  });
  
 
export default function TeLIXApp({ Component, pageProps }: AppProps) {
  return <Component className={openSans.variable} {...pageProps} />
}