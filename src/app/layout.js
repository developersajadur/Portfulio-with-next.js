// app/layout.js or app/layout.tsx

import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
import AnimatedCursor from "react-animated-cursor";
import BackToTopButton from "@/Tools/BackToTopButton";
import QueryProvider from "@/Providers/QueryProvider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title:
    "Sajadur Rahman | Full-Stack Web Developer | React.js & Next.js Specialist | WordPress Expert | Transforming Ideas Into Digital Reality",
  description:
    "Welcome to the professional portfolio of Sajadur Rahman, a full-stack web developer specializing in React.js and Next.js. As a WordPress expert, I transform ideas into digital reality. Explore my projects, skills, and expertise in creating dynamic, user-friendly web applications and websites.",
  keywords:
    "Sajadur Rahman, Full-Stack Web Developer, React.js & Next.js Specialist, WordPress Expert, Transforming Ideas Into Digital Reality, Portfolio, Projects, Skills, Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {/* Wrap the entire content in QueryProvider */}
        <QueryProvider>
          <AnimatedCursor color="28, 100, 242" />
          <div className="">
            <Navbar />
            {children}
            <Footer />
            <BackToTopButton />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
