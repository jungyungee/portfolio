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
        <section className="min-h-screen bg-[#1b1956] flex flex-col items-center justify-center p-4">
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
        <section id="about" className="min-h-screen bg-[#1b1956] flex items-center justify-center px-4 py-24">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-2xl text-white flex flex-col sm:flex-row gap-8">
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <Image
              src="/profile_no_bg.png"
              alt="정윤지 프로필"
              width={180}
              height={160}
              className="rounded-full border-2 border-white/20 shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-3xl font-bold">정윤지</h2>
            <p className="text-lg leading-relaxed">
              안녕하세요! 프론트엔드, 모바일 개발자 정윤지입니다.  
              Next.js, TypeScript를 사용한 웹 프론트엔드와 Flutter를 사용한 모바일 앱 개발을 합니다.
            </p>
            <div className="text-sm text-white/80 mt-2 space-y-1">
              <p className="px-4 py-2 text-black rounded-full bg-white w-fit">
                🎓 홍익대학교 컴퓨터공학과
              </p>
              <p>
                <a
                    href="mailto:jungyungee0610@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
                  >
                  📧 jungyungee0610@gmail.com
                  </a>
              </p>
              <p>
                <a
                  href="https://github.com/jungyungee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                💼 GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
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
