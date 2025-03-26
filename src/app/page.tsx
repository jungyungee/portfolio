'use client';
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-white">
      <header className="fixed top-0 left-0 w-full bg-[#0a1e3f] text-white z-50 shadow-md font-bold font-mono">
        <nav className="flex justify-center gap-8 p-4 text-lg font-medium">
          <a href="#about" className="hover:underline"> {"<about />"}</a>
          <a href="#skills" className="hover:underline"> {"<skills />"}</a>
          <a href="#projects" className="hover:underline"> {"<projects />"}</a>
        </nav>
      </header>
      <div className="scroll-smooth">
        <section id="about" className="min-h-screen bg-[#1b1956] flex flex-col items-center justify-center p-4">
          <h1 className="text-6xl font-bold">
            <Typewriter
              words={['정윤지', 'Yungee Jung']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={150}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-xl mt-4">프론트엔드 개발자</p>
        </section>
        <section id="skills" className="min-h-screen bg-[#1b1b1b] flex items-center justify-center p-10">
          <p className="text-2xl">소개글이나 기술 스택</p>
        </section>
        <section id="projects" className="min-h-screen bg-[#0f0f4f] flex items-center justify-center p-10">
          <p className="text-2xl">프로젝트</p>
        </section>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
