import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageToggle() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="absolute top-20 right-4 z-40">
      <div className="flex rounded-full overflow-hidden border border-white/30 shadow-md">
        <Link
          href="/"
          className={`px-4 py-1 ${
            !isEnglish
              ? "bg-white text-black"
              : "bg-transparent text-white hover:bg-white/20"
          } transition`}
        >
          한국어
        </Link>
        <Link
          href="/en"
          className={`px-4 py-1 ${
            isEnglish
              ? "bg-white text-black"
              : "bg-transparent text-white hover:bg-white/20"
          } transition`}
        >
          English
        </Link>
      </div>
    </div>
  );
}
