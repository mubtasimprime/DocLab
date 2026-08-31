import Image from "next/image";
import Container from "@/components/ui/Container";
import Sign from "public/about/sign.png";
import About1 from "public/about/about-1.jpg";
import About2 from "public/about/about-2.jpg";
import About3 from "public/about/about-3.jpg";
import About4 from "public/about/about-4.jpg";

const cards = [
  {
    image: About1,
    title: "Healthcare for Kids",
    description:
      "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
  },
  {
    image: About2,
    title: "Medical Counseling",
    description:
      "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
  },
  {
    image: About3,
    title: "Modern Equipments",
    description:
      "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
  },
  {
    image: About4,
    title: "Qualified Doctors",
    description:
      "Voluptate aperiam esse possimus maxime repellendus, nihil quod accusantium.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Top: Heading + Description + Signature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Left */}
          <div>
            <h2 className="font-roboto text-3xl md:text-4xl font-bold text-primary leading-tight">
              Personal care <br /> for your healthy <br /> living
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="font-roboto text-sm leading-relaxed text-primary/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, quod laborum alias. Vitae dolorum, officia sit! Saepe
              ullam facere at, consequatur incidunt, quae esse, quis ut
              reprehenderit dignissimos, libero delectus.
            </p>
            <div className="mt-5">
              <Image
                src={Sign}
                alt="Signature"
                width={130}
                height={55}
                className="object-contain opacity-70"
              />
            </div>
          </div>
        </div>

        {/* Bottom: 4 Image Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card) => (
            <div key={card.title}>
              <div className="relative w-full h-52 overflow-hidden rounded-sm">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-roboto text-base font-bold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="font-roboto text-sm leading-relaxed text-primary/60">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
