import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Sajadur Rahman | Welcome to My Universe | Full-Stack Web Developer | React.js & Next.js Specialist | WordPress Expert | Transforming Ideas Into Digital Reality",
  description: "Welcome to the professional portfolio of Sajadur Rahman, a full-stack web developer specializing in React.js and Next.js. As a WordPress expert, I transform ideas into digital reality. Explore my projects, skills, and expertise in creating dynamic, user-friendly web applications and websites.",
  keywords: "Sajadur Rahman, Full-Stack Web Developer, React.js & Next.js Specialist, WordPress Expert, Transforming Ideas Into Digital Reality, Portfolio, Projects, Skills, Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <div className="">
        <Navbar />
        {children}
        <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
