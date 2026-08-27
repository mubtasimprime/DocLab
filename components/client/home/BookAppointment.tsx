"use client";

import { FormEvent } from "react";
import { ChevronRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FormField from "@/components/ui/FormField";

// TODO: dummy options — replace with real departments/doctors from the backend later.
const departments = [
  { label: "Cardiology", value: "cardiology" },
  { label: "Neurology", value: "neurology" },
  { label: "Dental Care", value: "dental-care" },
  { label: "Gynecology", value: "gynecology" },
];

const doctors = [
  { label: "Dr. Partho Sarothi", value: "partho-sarothi" },
  { label: "Dr. Kolis Mullar", value: "kolis-mullar" },
  { label: "Dr. Meherun Nesa", value: "meherun-nesa" },
];

const BookAppointment = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: wire up to the appointment booking API.
  };

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative h-100 w-full overflow-hidden rounded-2xl lg:h-140">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/doclab-book-appointment/700/900"
                alt="Doctors ready to help"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 flex items-center gap-4 bg-primary px-8 py-6 sm:right-10">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/40 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <span className="font-exo text-2xl font-bold whitespace-nowrap text-white">
                +23 345 67980
              </span>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-exo text-4xl leading-tight font-bold text-primary lg:text-5xl">
              Book appoinment
            </h2>

            <p className="mt-6 font-roboto text-base leading-relaxed text-primary/60">
              Mollitia dicta commodi est recusandae iste, natus eum asperiores
              corrupti qui velit . Iste dolorum atque similique praesentium
              soluta.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  as="select"
                  name="department"
                  placeholder="Choose Department"
                  options={departments}
                  required
                />
                <FormField
                  as="select"
                  name="doctor"
                  placeholder="Select Doctors"
                  options={doctors}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField type="date" name="date" placeholder="dd/mm/yyyy" required />
                <FormField type="time" name="time" placeholder="Time" required />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
                <FormField
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>

              <FormField
                as="textarea"
                name="message"
                placeholder="Your Message"
                rows={5}
              />

              <Button
                type="submit"
                variant="primary"
                icon={<ChevronRight className="h-4 w-4" />}
                className="mt-2 px-8 py-3.5"
              >
                Make Appoinment
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BookAppointment;
