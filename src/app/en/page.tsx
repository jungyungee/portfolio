'use client';
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { ChevronDown } from 'lucide-react';
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactForm from "@/components/ContactForm";
import SkillsSection from "@/components/SkillSection";
import LanguageToggle from "@/components/LanguageToggle";

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  

  return (
    <>
    <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#1b1956] to-[#0f0f4f] -z-20" />
    <Particles
    id="tsparticles"
    init={particlesInit}
    className="fixed top-0 left-0 w-screen h-screen -z-10"
    options={{
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: true,
          speed: 0.5,
          direction: "bottom",
          straight: false,
          outModes: { default: "out" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false }
        }
      }
    }}
  />
    <div className="font-[family-name:var(--font-geist-sans)] text-white">
      <header className="fixed top-0 left-0 w-full bg-[#0f0f4f] text-white z-50 shadow-md font-bold font-mono">
        <nav className="flex justify-center gap-8 p-4 text-lg font-medium">
          <a href="#about" className="hover:underline"> {"<about />"}</a>
          <a href="#skills" className="hover:underline"> {"<skills />"}</a>
          <a href="#projects" className="hover:underline"> {"<projects />"}</a>
        </nav>
      </header>
      <div className="scroll-smooth">
        <section className="min-h-screen bg-transparent relative flex flex-col items-center justify-center pt-28 p-4">
          <LanguageToggle />
            <h1 className="text-6xl font-bold font-mono">
              <Typewriter
                words={['Yungee Jung', '정윤지']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="text-xl mt-4 font-mono">Frontend Developer</p>
            {/* 스크롤 안내 텍스트 + 애니메이션 화살표 */}
            <br />
            <div className="mt-10 flex flex-col items-center animate-bounce text-white/70">
            <p className="text-sm mb-1 font-mono">Scroll Down!</p>
            <ChevronDown size={32} />
          </div>
        </section>
        
        <section id="about" className="bg-transparent flex items-center justify-center px-4 py-24">
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 40 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-4xl text-white flex flex-col sm:flex-row gap-8"
          >
                <div className="flex-shrink-0 flex justify-center sm:justify-start">
                  <Image
                    src="/me.jpeg"
                    alt="정윤지 프로필"
                    width={260}
                    height={150}
                    className="rounded-xl border-4 shadow-lg object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <h2 className="text-3xl font-bold">Yungee Jung</h2>
                  <p className="text-lg leading-relaxed">
                    Hello! I’m a developer focused on frontend and mobile app development. <br />
                    With experience building responsive interfaces using React, Next.js, TypeScript, and Flutter, I aim to create intuitive and efficient user experiences.
                    </p>
                  <p className="text-white/80 text-sm mt-2">
                    🎓 Hongik University, Dept. of Computer Engineering <br />
                    💻 UMC 4th Gen FE Developer (2023.03 – 2023.07) <br />
                    🦁 LIKE LION Hongik Univ. 11th Gen FE Developer (2023.03 – 2023.12)
                  </p>
                  <div className="text-sm text-white/80 mt-2 space-y-1">
                    <p>
                      <a
                        href="mailto:jungyungee0610@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-1.5 rounded-full bg-white/70 text-black/90 text-sm font-medium hover:bg-white/90 transition"
                      >
                        📧 jungyungee0610@gmail.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/jungyungee"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-1.5 rounded-full bg-white/70 text-black/90 text-sm font-medium hover:bg-white/90 transition"
                      >
                        💼 GitHub
                      </a>
                    </p>
                  </div>
                </div>
            </motion.div>
        </section>
        
        <section
          id="skills"
          className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 py-24 text-center font-mono">
          <SkillsSection />
        </section>

        <section id="projects" className="min-h-screen bg-transparent px-6 py-24 flex flex-col items-center gap-12 font-mono">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">🚀 Projects</h2>
            <p className="text-white/80 text-lg">
            A collection of projects I’ve participated in, including IT club activities and team development work.
            </p>
          </motion.div>
          <ProjectShowcase
            title="Totok Totok"
            description="Started from a common concern—‘I want to read more, but I can't make it a habit’—we developed a mobile app to help build consistent reading habits.
                This Flutter-based app visualizes users’ reading progress and lets them write short reviews and track pages read, all aimed at boosting motivation.
                We integrated Kyobo Bookstore’s Open API to fetch book data and implemented intuitive, real-time saving UI for seamless use."
            mediaType="image"
            mediaSrc="/todok_1.png"
            techStack={['Flutter', 'Dart']}
            reverse={false}
          />
          <br />
          <ProjectShowcase
            title="WOW MARKET"
            description="Despite the active production of campus merchandise by students, transactions often happen inefficiently across platforms like Everytime or KakaoTalk.
                We created a commerce web platform dedicated to university goods, enabling students to easily list and browse items specific to their campus.
                I worked on the frontend, implementing responsive UI, filtering features, and product listing flows using React and JavaScript."
            mediaType="video"
            mediaSrc="/videos/wowmarket_video.mp4"
            techStack={['React', 'JavaScript', 'CSS']}
            reverse={true}
          />
          <br />
          <ProjectShowcase
            title="ESCAPE-T"
            description="A 2D puzzle escape game set in the T-building (Engineering Hall) of a university. Players explore different floors, gather clues, and solve puzzles to escape.
                I participated in every step—planning the scenario, designing levels, implementing logic, and directing UI flow—using Unity and C#.
                This project won the Silver Award in our university’s programming competition."
            mediaType="video"
            mediaSrc="/videos/EscapeT.mp4"
            techStack={['Unity', 'C#']}
            reverse={false}
          />
          <br />
          <ProjectShowcase
            title="Witch's Room"
            description="A VR 3D escape room game built during the TU Berlin Summer Uni program. Developed with Unity and C# for Oculus Quest 2, the game explored user interaction, spatial navigation, and immersive design in a virtual environment."
            techStack={['Unity', 'C#', 'Oculus Quest 2', 'VR UX']}
            mediaType="image"
            mediaSrc="/Berlin.png"
            reverse={true}
          />
        </section>
      </div>
      <div className="flex justify-center items-center min-h-screen px-4">
        <ContactForm />
      </div>
      <footer className="bg-transparent text-white text-sm p-6 flex flex-col items-center space-y-2">
        <p>© 2025 Yungee Jung. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}
