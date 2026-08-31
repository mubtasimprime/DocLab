import Image from "next/image";

const specialists = [
  {
    image: "/about/doc1.jpg",
    name: "John Marshal",
    specialization: "Internist, Emergency Physician",
  },
  {
    image: "/about/doc2.jpg",
    name: "Marshal Root",
    specialization: "Surgeon, Cardiologist",
  },
  {
    image: "/about/doc3.jpg",
    name: "Siamon john",
    specialization: "Internist, General Practitioner",
  },
  {
    image: "/about/doc4.jpg",
    name: "Rishat Ahmed",
    specialization: "Orthopedic Surgeon",
  },
];

const AboutSpecialist = () => {
  return (
    <section className="py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1a2e6f] mb-3">
          Meet Our Specialist
        </h2>
        <div className="w-10 h-1 bg-red-500 mx-auto mb-5" />
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          Today&apos;s users expect effortless experiences. Don&apos;t let
          essential people and processes stay stuck in the past. Speed it up,
          skip the hassles
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {specialists.map((doc) => (
          <div key={doc.name} className="flex flex-col items-start w-44">
            <div className="relative w-44 h-52 mb-3 overflow-hidden rounded-sm">
              <Image
                src={doc.image}
                alt={doc.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="font-semibold text-[#1a2e6f] text-sm">{doc.name}</p>
            <p className="text-gray-400 text-xs mt-0.5">{doc.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSpecialist;
