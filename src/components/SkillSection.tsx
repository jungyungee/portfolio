import { FaReact, FaGithub, FaGitAlt, FaFigma, FaPython, FaUnity, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiDart, SiDotnet, SiMysql, SiFirebase, SiNotion } from 'react-icons/si';

const skills = [
  {
    title: 'Frontend',
    icon: '🧩',
    items: [
      { name: 'React', icon: <FaReact className="text-sky-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    title: 'Mobile',
    icon: '📱',
    items: [
      { name: 'Flutter', icon: <SiDart className="text-sky-600" /> },
      { name: 'Dart', icon: <SiDart className="text-sky-400" /> },
    ],
  },
  {
    title: 'Backend / DB',
    icon: '🗄️',
    items: [
      { name: 'ASP.NET', icon: <SiDotnet className="text-purple-300" /> },
      { name: 'SQL Server', icon: <SiMysql className="text-gray-400" /> },
      { name: 'RESTful APIs', icon: <span className="text-white">🔗</span> },
    ],
  },
  {
    title: 'Tools & Etc.',
    icon: '🧰',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'Notion', icon: <SiNotion className="text-white" /> },
      { name: 'Figma', icon: <FaFigma className="text-pink-500" /> },
      { name: 'Unity', icon: <FaUnity className="text-white" /> },
      { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 text-center text-white font-mono">
      <h2 className="text-4xl font-bold mb-12 flex justify-center items-center gap-2">
        🛠 <span>Tech Stack</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {skills.map((category) => (
          <div key={category.title} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-left">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <span>{category.icon}</span> {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/30 transition"
                >
                  {skill.icon} {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}