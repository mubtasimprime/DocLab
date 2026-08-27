"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";

// TODO: dummy placeholder avatars — replace with real patient photos later.
const testimonials = [
  {
    name: "Partho Sarothi",
    title: "Nice Environment!",
    quote:
      "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    avatar: "https://picsum.photos/seed/doclab-testimonial-1/100/100",
  },
  {
    name: "Kolis Mullar",
    title: "Modern Service!",
    quote:
      "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    avatar: "https://picsum.photos/seed/doclab-testimonial-2/100/100",
  },
  {
    name: "Meherun Nesa",
    title: "Friendly Staff!",
    quote:
      "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    avatar: "https://picsum.photos/seed/doclab-testimonial-3/100/100",
  },
  {
    name: "Rakib Hasan",
    title: "Quick Recovery!",
    quote:
      "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    avatar: "https://picsum.photos/seed/doclab-testimonial-4/100/100",
  },
  {
    name: "Farzana Akter",
    title: "Caring Doctors!",
    quote:
      "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    avatar: "https://picsum.photos/seed/doclab-testimonial-5/100/100",
  },
  {
    name: "Imran Khalid",
    title: "Trusted Clinic!",
    quote:
      "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
    avatar: "https://picsum.photos/seed/doclab-testimonial-6/100/100",
  },
];

// Two cards per slide.
const slides = Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, i) =>
  testimonials.slice(i * 2, i * 2 + 2),
);

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f4f9fc] py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-exo text-4xl leading-tight font-bold text-primary lg:text-5xl">
            We served over 5000+ Patients
          </h2>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-secondary" />

          <p className="mt-6 font-roboto text-base leading-relaxed text-primary/60">
            Lets know moreel necessitatibus dolor asperiores illum possimus
            sint voluptates incidunt molestias nostrum laudantium. Maiores
            porro cumque quaerat.
          </p>
        </div>

        <div className="mt-16 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid w-full shrink-0 grid-cols-1 gap-8 sm:grid-cols-2"
              >
                {slide.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="relative rounded-2xl bg-white p-8 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-exo text-lg font-bold text-primary">
                          {testimonial.title}
                        </h3>
                        <p className="font-roboto text-sm text-primary/50">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 font-roboto text-base leading-relaxed text-primary/60">
                      {testimonial.quote}
                    </p>

                    <Quote className="mt-6 ml-auto h-8 w-8 fill-secondary/20 text-secondary/20" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              type="button"
              aria-label={`Go to slide ${slideIndex + 1}`}
              onClick={() => setActive(slideIndex)}
              className={`rounded-full transition-all ${
                slideIndex === active
                  ? "h-2.5 w-2.5 bg-primary"
                  : "h-2 w-2 bg-primary/20"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
