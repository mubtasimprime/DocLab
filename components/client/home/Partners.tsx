import Image from "next/image";
import Container from "@/components/ui/Container";

const partners = [
  { src: "/home/Partners/1.png", alt: "Authentic Coffee" },
  { src: "/home/Partners/2.png", alt: "Global Health Awards" },
  { src: "/home/Partners/3.png", alt: "Mochaccino" },
  { src: "/home/Partners/4.png", alt: "German Medical Award" },
  { src: "/home/Partners/5.png", alt: "Retrodesign" },
  { src: "/home/Partners/6.png", alt: "German Medical Award" },
];

// Duplicated so the track can loop seamlessly from -50%.
const track = [...partners, ...partners];

const Partners = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-exo text-4xl leading-tight font-bold text-primary lg:text-5xl">
            Partners who support us
          </h2>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-secondary" />

          <p className="mt-6 font-roboto text-base leading-relaxed text-primary/60">
            Lets know moreel necessitatibus dolor asperiores illum possimus
            sint voluptates incidunt molestias nostrum laudantium. Maiores
            porro cumque quaerat.
          </p>
        </div>

        <div
          className="mt-16 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="animate-marquee flex w-max items-center">
            {track.map((partner, index) => (
              <div
                key={`${partner.alt}-${index}`}
                className="flex w-32 shrink-0 items-center justify-center px-6 sm:w-40 lg:w-48"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={160}
                  height={80}
                  className="h-auto max-h-12 w-full object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partners;
