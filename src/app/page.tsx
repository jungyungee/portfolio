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
            {/* 스크롤 안내 텍스트 + 애니메이션 화살표 */}
            <br />
            <div className="mt-10 flex flex-col items-center animate-bounce text-white/70">
            <p className="text-sm mb-1">스크롤 해주세요!</p>
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
                  <h2 className="text-3xl font-bold">정윤지</h2>
                  <p className="text-lg leading-relaxed">
                    안녕하세요! 프론트엔드와 모바일 앱 개발을 중심으로 사용자 경험을 고민하는 개발자 정윤지입니다. <br />
                    React, Next.js, TypeScript를 활용한 웹 프론트엔드 개발과 Flutter를 통한 모바일 앱 구축 경험을 바탕으로, 효율적이고 감각적인 인터페이스를 만드는 데 집중하고 있습니다.
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    🎓 홍익대학교 컴퓨터공학과<br />
                    💻 UMC 4기 FE 개발자 (2023.03 – 2023.07)<br />
                    🦁 멋쟁이 사자처럼 홍대 11기 FE 개발자 (2023.03 – 2023.12)
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
              개발 동아리 및 팀 프로젝트 등 개발에 참여한 프로젝트들을 소개합니다.
            </p>
          </motion.div>
          <ProjectShowcase
            title="Totok Totok"
            description="주변 사람들이 “책을 읽고 싶어도 습관이 안 된다”는 고민에서 출발해, 독서 습관 형성을 돕는 모바일 앱을 기획·개발했습니다.
  Flutter로 구현된 이 앱은 사용자가 읽고 있는 책의 진행률을 시각화하고, 한 줄 리뷰와 읽은 페이지 수를 기록하며 동기를 부여합니다.
  교보문고 Open API를 활용해 책 정보를 자동으로 불러오고, 실시간 저장 기능과 직관적인 UI를 통해 사용성이 강조된 구조를 구현했습니다."
            mediaType="image"
            mediaSrc="/todok_1.png"
            techStack={['Flutter', 'Dart']}
            reverse={false}
          />
          <br />
          <ProjectShowcase
            title="WOW MARKET"
            description="대학별 굿즈 제작이 활발하지만 거래는 에브리타임, 오픈카톡 등에서 분산되어 이루어져 비효율적인 점에 주목했습니다.
  학생들이 직접 제작한 굿즈를 손쉽게 등록하고, 타겟 소비자(같은 학교 학생들)가 모여 사고팔 수 있는 대학 굿즈 전용 커머스 웹서비스를 기획 및 프론트엔드로 구현했습니다.
  학교별 상품 분류와 수요조사 기능을 도입해, 판매자는 정확한 타겟팅이 가능하고 구매자는 깔끔한 UI를 통해 손쉽게 탐색할 수 있도록 했습니다.
  React와 JavaScript 기반으로 구현했으며, 반응형 UI, 조건별 필터링, 상품 등록/관리 기능 등을 중심으로 개발했습니다."
            mediaType="video"
            mediaSrc="/videos/wowmarket_video.mp4"
            techStack={['React', 'JavaScript', 'CSS']}
            reverse={true}
          />
          <br />
          <ProjectShowcase
            title="ESCAPE-T"
            description="대학교 공학관(T동)을 배경으로 한 2D 퍼즐 방탈출 게임입니다. 플레이어는 건물 내 다양한 공간에서 단서를 수집하고 퍼즐을 해결하며 층별로 진행하게 됩니다. 전체 시나리오 기획부터 레벨 구성, 퍼즐 로직 설계, UI 흐름 등 개발의 전반적인 과정에 참여했으며, Unity와 C#을 사용해 상호작용과 연출을 구성했습니다. 해당 프로젝트로 교내 프로그래밍 대회에서 은상을 수상하였습니다."
            mediaType="video"
            mediaSrc="/videos/EscapeT.mp4"
            techStack={['Unity', 'C#']}
            reverse={false}
          />
          <br />
          <ProjectShowcase
            title="Witch's Room"
            description="베를린 공대 Summer Uni 프로그램에서 진행한 VR 프로젝트. Unity와 C#을 사용해 VR 헤드셋 기반의 3D 방 탈출 게임을 개발했습니다. 팀원들과 함께 가상공간에서의 사용자 인터랙션, 이동 방식, 공간 인식 등에 대한 실험적인 구현을 시도했습니다."
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
