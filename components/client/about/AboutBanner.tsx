import Image, { StaticImageData } from "next/image";
import BannerImg from "public/home/Hero.jpeg";

interface AboutBannerProps {
  title?: string;
  subtitle?: string;
  imageSrc?: string | StaticImageData;
}

export default function AboutBanner({
  title = "About Us",
  subtitle = "About Us",
  imageSrc = BannerImg,
}: AboutBannerProps) {
  return (
    <section className="relative w-full h-72 md:h-80 lg:h-96 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      {/* Bluish Overlay matching Novena */}
      <div className="absolute inset-0 bg-[#223a66]/75" />

      {/* Banner Content */}
      <div className="relative z-10 mx-auto px-4 max-w-5xl text-center">
        <span className="block text-sm md:text-base font-roboto font-medium text-white/80 tracking-widest uppercase mb-3">
          {subtitle}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-exo text-white tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
