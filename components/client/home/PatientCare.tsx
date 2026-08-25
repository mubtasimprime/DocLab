import { Brain, Dna, FlaskConical, HeartPulse, PersonStanding, Smile } from "lucide-react";
import Container from "@/components/ui/Container";

// TODO: dummy icons — replace with real service icons later.
const services = [
  {
    icon: <FlaskConical className="h-6 w-6" />,
    title: "Laboratory services",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Heart Disease",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <Smile className="h-6 w-6" />,
    title: "Dental Care",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <PersonStanding className="h-6 w-6" />,
    title: "Body Surgery",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Neurology Sargery",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
  {
    icon: <Dna className="h-6 w-6" />,
    title: "Gynecology",
    description: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
  },
];

const PatientCare = () => {
  return (
    <section className="relative z-10 -mt-24 bg-[#f4f9fc] pt-40 pb-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-exo text-4xl leading-tight font-bold text-primary lg:text-5xl">
            Award winning patient care
          </h2>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-secondary" />

          <p className="mt-6 font-roboto text-base leading-relaxed text-primary/60">
            Lets know moreel necessitatibus dolor asperiores illum possimus
            sint voluptates incidunt molestias nostrum laudantium. Maiores
            porro cumque quaerat.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  {service.icon}
                </span>
                <h3 className="font-exo text-lg font-bold text-primary">
                  {service.title}
                </h3>
              </div>

              <p className="mt-4 font-roboto text-sm leading-relaxed text-primary/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PatientCare;
