import Image from "next/image";

export default function MobileWhyChooseUs({ features }) {
  return (
    <div className="md:hidden">
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 custom-scroll">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="
              w-[78vw]
              max-w-[320px]
              shrink-0
              snap-center
              rounded-2xl
              overflow-hidden
              bg-secondary-light/30
              border border-primary/10
              shadow-sm
            "
          >
            <div className="relative h-45">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-dark/10 to-transparent" />
            </div>

            <div className="p-5 flex flex-col gap-3">
              <h3 className="font-semibold text-lg">{feature.title}</h3>

              <p className="text-sm leading-relaxed text-dark/65">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
