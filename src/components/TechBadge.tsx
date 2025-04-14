'use client';
import Image from 'next/image';

export default function TechBadge({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-white/20 text-sm rounded-full backdrop-blur-sm text-white">
      <Image src={src} alt={name} width={20} height={20} />
      {name}
    </div>
  );
}
