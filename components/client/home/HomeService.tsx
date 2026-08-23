import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

// TODO: dummy placeholder photos — replace with real Freepik/brand images.
const images = {
  patient: "https://picsum.photos/seed/doclab-patient/600/500",
  team: "https://picsum.photos/seed/doclab-team/600/500",
  doctors: "https://picsum.photos/seed/doclab-doctors/700/1000",
};

const HomeService = () => {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Image collage */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <div className="h-56 overflow-hidden rounded-2xl lg:h-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.patient}
                alt="Patient at the clinic"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-56 overflow-hidden rounded-2xl lg:h-64">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images.team}
                alt="Medical team reviewing a chart"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="h-full overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.doctors}
              alt="Doctors standing together"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="font-exo text-4xl leading-tight font-bold text-primary lg:text-5xl">
            Personal care &amp; healthy living
          </h2>

          <p className="mt-6 font-roboto text-base leading-relaxed text-primary/60">
            We provide best leading medicle service Nulla perferendis veniam
            deleniti ipsum officia dolores repellat laudantium obcaecati
            neque.
          </p>

          <Button
            href="#"
            variant="secondary"
            icon={<ChevronRight className="h-4 w-4" />}
            className="mt-8 px-8 py-2.5"
          >
            Services
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HomeService;
