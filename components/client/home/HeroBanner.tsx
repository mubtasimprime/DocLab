import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Banner from "public/home/Hero.jpeg";

const HeroBanner = () => {
  return (
    <section className="relative">
      <div className="relative h-140 w-full lg:h-160">
        <Image
          src={Banner}
          alt="Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-white/0" />

        <div className="relative z-10 mx-auto flex h-full max-w-285 items-center">
          <div className="max-w-xl">
            <div className="h-1 w-10 bg-secondary mb-4" />
            <div className="mb-4 flex items-center gap-3 font-roboto text-sm font-regular tracking-[0.25em] text-primary/90 uppercase">
              Total Health Care Solution
            </div>

            <h1 className="font-exo text-5xl font-bold leading-[1.1] text-primary lg:text-6xl">
              Your Most Trusted Health Partner
            </h1>

            <p className="mt-4 font-roboto text-base leading-relaxed text-primary/70">
              A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium
              quisquam aperiam maiores sunt fugit, deserunt rem suscipit
              placeat.
            </p>

            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-5 py-2.5 font-roboto text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-secondary/90"
            >
              Make Appoinment
              <span className="flex h-4 w-4 items-center justify-center rounded-full">
                <ChevronRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
