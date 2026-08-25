import { Globe, HeartHandshake, Stethoscope, UserCheck } from "lucide-react";
import Container from "@/components/ui/Container";

// TODO: dummy bg image — replace with real Freepik/brand image.
const bgImage = "https://picsum.photos/seed/doclab-countup/1600/500";

// TODO: dummy watermark icons — replace with real logos later.
const stats = [
  {
    icon: <UserCheck className="h-14 w-14" />,
    value: "58",
    suffix: "k",
    label: "Happy People",
  },
  {
    icon: <HeartHandshake className="h-14 w-14" />,
    value: "700",
    suffix: "+",
    label: "Surgery Comepleted",
  },
  {
    icon: <Stethoscope className="h-14 w-14" />,
    value: "40",
    suffix: "+",
    label: "Expert Doctors",
  },
  {
    icon: <Globe className="h-14 w-14" />,
    value: "20",
    suffix: "",
    label: "Worldwide Branch",
  },
];

const CountUp = () => {
  return (
    <section className="relative z-20 px-4 pt-0">
      <Container className="relative overflow-hidden bg-primary shadow-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-primary/80" />

        <div className="relative grid grid-cols-2 gap-y-10 px-8 py-14 sm:px-12 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="relative text-center">
              <div className="relative inline-flex items-center justify-center">
                <span className="pointer-events-none absolute inset-0 z-0 flex -translate-y-8 items-center justify-center text-white/20">
                  {stat.icon}
                </span>

                <p className="relative z-10 font-exo text-5xl font-bold text-white">
                  {stat.value}
                  <span className="text-2xl font-normal text-white/50">
                    {stat.suffix}
                  </span>
                </p>
              </div>

              <p className="mt-2 font-roboto text-sm text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CountUp;
