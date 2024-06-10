import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// Import with next's dynamic import
// import dynamic from 'next/dynamic';

// const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
//     ssr: false,
// });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "amd",
  description: "amd or amd-three is ahmed abusetta portfilio ,he is an bginer fullstack enginner, good at typeScript lang using frontend libraries like react ,frameworks like nextjs and backend useing nodejs and nest js and ther more technolgies  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Toaster/>
      {/* <AnimatedCursor /> */}
      
      </body>
    </html>
  );
}
