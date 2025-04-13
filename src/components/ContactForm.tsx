'use client';

import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        'service_qec8je4',
        'template_prtm48s',
        formRef.current!,
        'EoFfWJNA_5ku-1hYd'
      )
      .then(() => {
        setStatus("✅ 메일이 성공적으로 전송되었습니다!");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("❌ 전송 중 오류가 발생했습니다.");
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 bg-white/10 p-6 rounded-xl backdrop-blur-md w-full max-w-xl text-white font-mono"
    >
      <h3 className="text-2xl font-bold">📮 Contact Me</h3>

      <input
        type="text"
        name="name"
        placeholder="이름"
        required
        className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white transition resize-none"
      />
      <input
        type="email"
        name="email"
        placeholder="이메일"
        required
        className="px-4 py-2 rounded-md bg-white/10 text-whit placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white transition resize-none"
      />
      <textarea
        name="message"
        placeholder="보내고 싶은 메시지를 입력하세요"
        rows={5}
        required
        className="px-5 py-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white transition resize-none"
      />

      <button
        type="submit"
        className="bg-white/70 text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
      >
        메일 보내기
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
