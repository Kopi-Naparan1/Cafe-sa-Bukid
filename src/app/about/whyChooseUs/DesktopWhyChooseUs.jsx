import Image from "next/image";

export default function DesktopWhyChooseUs({ features }) {
  return (
    <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="
            rounded-2xl
            overflow-hidden
            bg-secondary-light/30
            border border-primary/10
            shadow-sm
            hover:shadow-md
            transition-all duration-200
          "
        >
          <div className="relative h-55">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>

            <p className="text-sm leading-relaxed text-dark/65">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
