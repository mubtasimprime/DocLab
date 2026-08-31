import Image from "next/image";
import Container from "@/components/ui/Container";
import Partner1 from "public/home/Partners/1.png";
import Partner2 from "public/home/Partners/2.png";
import Partner3 from "public/home/Partners/3.png";
import Partner4 from "public/home/Partners/4.png";
import Partner5 from "public/home/Partners/5.png";
import Partner6 from "public/home/Partners/6.png";

const partners = [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6];

const AboutAchievements = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-center">
          {/* Left: Heading */}
          <div>
            <h2 className="font-roboto text-3xl font-bold text-primary leading-tight">
              Our Doctors <br /> achievements
            </h2>
            <div className="mt-4 h-1 w-10 bg-secondary" />
          </div>

          {/* Right: 3x2 Logo Grid */}
          <div className="grid grid-cols-3 gap-4">
            {partners.map((src, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-[#f4f7fb] p-6 h-28"
              >
                <Image
                  src={src}
                  alt={`Achievement ${i + 1}`}
                  className="object-contain max-h-16 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutAchievements;
