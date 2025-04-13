import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectShowcase({
  title,
  description,
  mediaType,
  mediaSrc,
  techStack,
  reverse = false,
}: {
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  techStack?: string[];
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`w-full px-6 lg:px-20 flex flex-col items-center`}
    >
      <div
        className={`w-full max-w-[1440px] flex flex-col lg:flex-row items-center gap-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h3>
          <p className="text-base lg:text-lg text-white/80 mb-6">{description}</p>
          {techStack && (
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-2xl border border-white/10">
          {mediaType === "image" ? (
            <Image
              src={mediaSrc}
              alt={title}
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          ) : (
            <video
              src={mediaSrc}
              controls
              muted
              className="w-full h-auto object-cover"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
